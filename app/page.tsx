'use client'

import Header from '@/app/components/ui/header'
import { SunIcon, CloudRainIcon, WindIcon, ThermometerIcon, DropletIcon, CloudIcon, UmbrellaIcon, SnowflakeIcon } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import { ScrollArea } from "@/app/components/ui/scroll-area"
import WeatherForm from '@/app/components/ui/form'
import { useState, useEffect } from 'react'
import { WeatherData } from '@/app/types';


const getWeatherIcon = (condition: string) => {
    if (condition.includes('Sunny') || condition.includes('Clear')) {
        return <SunIcon className="h-24 w-24 text-yellow-400" />;
    } else if (condition.includes('Rain') || condition.includes('Drizzle')) {
        return <CloudRainIcon className="h-24 w-24 text-blue-400" />;
    } else if (condition.includes('Snow')) {
        return <SnowflakeIcon className="h-24 w-24 text-blue-200" />;
    } else {
        // Default to cloudy weather if condition is ambiguous
        return <CloudIcon className="h-24 w-24 text-gray-400" />;
    }
};

const Page = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWeatherData = async (location: string) => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=14`);
            if (!response.ok) {
                window.location.href = '/404';
            }
            const data: WeatherData = await response.json();
            setWeatherData(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData('London'); // Default location
    }, []);

    const handleSearch = (location: string) => {
        setLoading(true);
        fetchWeatherData(location);
    };

    if (loading) {
        return <div>Loading ...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weatherData) {
        return <div>No weather data available</div>;
    }

    return (
        <div>
            <Header />

            <main className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32 py-8">

                {/* Search Section */}
                <section className="py-4 md:py-8 flex justify-center">
                    <WeatherForm onSearch={handleSearch} />
                </section>

                {/* Current Weather Section */}
                <section className="py-4 md:py-8">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-400">
                                    {weatherData.location.name}, {weatherData.location.country}
                                </h1>
                                <p className="text-slate-400 md:text-xl">
                                    Lat: {weatherData.location.lat}, Lon: {weatherData.location.lon}
                                </p>
                            </div>
                            <div className="flex items-center justify-center space-x-8">
                                {getWeatherIcon(weatherData.current.condition.text)}
                                <div className="text-center">
                                    <p className="text-6xl font-bold">{weatherData.current.temp_c}°C</p>
                                    <p className="text-xl text-slate-400">{weatherData.current.condition.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Weather Details Section */}
                <section className="py-12">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: <ThermometerIcon className="h-6 w-6 text-green-400" />, title: "Feels Like", value: `${weatherData.current.feelslike_c} °C` },
                                { icon: <WindIcon className="h-6 w-6 text-green-400" />, title: "Wind", value: `${weatherData.current.wind_kph} kph` },
                                { icon: <DropletIcon className="h-6 w-6 text-green-400" />, title: "Humidity", value: `${weatherData.current.humidity} %` },
                                { icon: <CloudRainIcon className="h-6 w-6 text-green-400" />, title: "Precipitation", value: `${weatherData.current.precip_mm} mm` },
                            ].map((item, index) => (
                                <Card key={index} className="bg-slate-900 border-slate-800 text-slate-300">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                        {item.icon}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{item.value}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 24-Hour Forecast Section */}
                <section className="py-12">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">24-Hour Forecast</h2>
                        <Card className="bg-slate-900 border-slate-800">
                            <CardContent className="p-6">
                                <ScrollArea className="h-[400px] w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {weatherData.forecast.forecastday[0].hour.map((hourData, i) => (
                                            <Card key={i} className="bg-slate-800 border-slate-700">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-lg text-green-400">
                                                        {new Date(hourData.time_epoch * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true })}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <img src={hourData.condition.icon} alt={hourData.condition.text} className="h-8 w-8" />
                                                            <div>
                                                                <p className="text-2xl font-bold text-slate-50">{hourData.temp_c}°C</p>
                                                                <p className="text-sm text-slate-400">{hourData.condition.text}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right text-slate-400">
                                                            <p className="text-sm"><ThermometerIcon className="inline h-4 w-4 mr-1" />Feels like: {hourData.feelslike_c}°C</p>
                                                            <p className="text-sm"><UmbrellaIcon className="inline h-4 w-4 mr-1" />Precip: {hourData.precip_mm} mm</p>
                                                            <p className="text-sm"><WindIcon className="inline h-4 w-4 mr-1" />Wind: {hourData.wind_kph} kph</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Forecast Section */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Next Days Forecast</h2>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {weatherData.forecast.forecastday.map((dayData, index) => (
                                <Card key={index} className="bg-slate-900 border-slate-800 text-slate-300">
                                    <CardHeader>
                                        <CardTitle className="text-center">
                                            {new Date(dayData.date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-center">
                                            <img src={dayData.day.condition.icon} alt={dayData.day.condition.text} className="h-12 w-12 mx-auto" />
                                            <p className="text-2xl font-bold">
                                                {dayData.day.maxtemp_c}°C / {dayData.day.mintemp_c}°C
                                            </p>
                                            <p className="text-sm">{dayData.day.condition.text}</p>
                                            <p className="text-xs text-slate-400">Precip: {dayData.day.totalprecip_mm} mm</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};


export default Page;
