import React from 'react'
import Header from '@/app/components/ui/header'
import { MenuIcon, SunIcon, CloudRainIcon, WindIcon, ThermometerIcon, DropletIcon, SearchIcon } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import Footer from '@/app/components/ui/footer'





const page = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-8">

                {/* Search Section */}
                <section className="py-4 md:py-8 flex justify-center">
                    <form className="flex space-x-2 w-full max-w-md">
                        <Input
                            className="flex-1 bg-slate-800 border-slate-700 text-slate-50 placeholder:text-slate-400"
                            placeholder="Enter city or zip code"
                            type="text"
                        />
                        <Button type="submit" className="bg-green-500 text-slate-900 hover:bg-green-400">Search</Button>
                    </form>
                </section>

                {/* Current Weather Section */}
                <section className="py-4 md:py-8">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-400">
                                    New York City
                                </h1>
                                <p className="text-slate-400 md:text-xl">Current Weather</p>
                            </div>
                            <div className="flex items-center justify-center space-x-8">
                                <SunIcon className="h-24 w-24 text-yellow-400" />
                                <div className="text-center">
                                    <p className="text-6xl font-bold">72°F</p>
                                    <p className="text-xl text-slate-400">Sunny</p>
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
                                { icon: <ThermometerIcon className="h-6 w-6 text-green-400" />, title: "Feels Like", value: "75°F" },
                                { icon: <WindIcon className="h-6 w-6 text-green-400" />, title: "Wind", value: "5 mph NE" },
                                { icon: <DropletIcon className="h-6 w-6 text-green-400" />, title: "Humidity", value: "45%" },
                                { icon: <CloudRainIcon className="h-6 w-6 text-green-400" />, title: "Precipitation", value: "0%" },
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

                {/* Forecast Section */}
                <section className="py-12">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-slate-200">7-Day Forecast</h2>
                        <Tabs defaultValue="daily" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                                <TabsTrigger value="daily">Daily</TabsTrigger>
                                <TabsTrigger value="hourly">Hourly</TabsTrigger>
                            </TabsList>
                            <TabsContent value="daily">
                                <Card className="bg-slate-900 border-slate-800">
                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-green-400">
                                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                                                <div key={index} className="flex flex-col items-center space-y-2">
                                                    <p className="font-medium">{day}</p>
                                                    <SunIcon className="h-8 w-8 text-yellow-400" />
                                                    <p className="text-sm text-slate-400">72°F</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="hourly">
                                <Card className="bg-slate-900 border-slate-800">
                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-green-400">
                                            {["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((hour, index) => (
                                                <div key={index} className="flex flex-col items-center space-y-2">
                                                    <p className="font-medium">{hour}</p>
                                                    <CloudRainIcon className="h-8 w-8 text-blue-400" />
                                                    <p className="text-sm">68°F</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    )
}

export default page