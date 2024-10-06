interface WeatherCondition {
    text: string;
    icon: string;
}

interface CurrentWeather {
    temp_c: number;
    is_day: number;
    condition: WeatherCondition;
    wind_kph: number;
    precip_mm: number;
    humidity: number;
    feelslike_c: number;
}

interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
    localtime_epoch: number;
    localtime: string;
}

interface HourlyForecast {
    time_epoch: number;
    time: string; // e.g., '12 AM', '1 AM'
    temp_c: number; // e.g., '68°F'
    feelslike_c: number;
    condition: {
        text: string;
        icon: string;
    }; // e.g., 'Partly Cloudy'
    precip_mm: number; // Should be a number, not a string
    wind_kph: number;
}

interface ForecastDay {
    date: string;
    date_epoch: number;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        totalprecip_mm: number;
        avghumidity: number;
        daily_will_it_rain: number;
        daily_chance_of_rain: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    hour: HourlyForecast[];
}

interface Forecast {
    forecastday: ForecastDay[];
}

interface WeatherData {
    location: Location;
    current: CurrentWeather;
    forecast: Forecast;
}

export type { WeatherData };