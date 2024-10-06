# NeonWeather 🌦️

A weather forecast web application built with Next.js and TypeScript that provides detailed 14-day weather forecasts for any location. The app fetches data from the [WeatherAPI](https://www.weatherapi.com/) and displays it in a user-friendly interface.

## Features

- 🌍 Search weather data by city or location.
- ⏳ 14-day weather forecast.
- ☁️ Displays current conditions including temperature, humidity, and wind speed.
- 📆 Future weather predictions including temperature highs and lows, rainfall, and more.
- 🔄 Real-time weather updates using the [WeatherAPI](https://www.weatherapi.com/).

## Demo

Check out the live demo [here](https://neonweather.netlify.app).

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **API**: [WeatherAPI](https://www.weatherapi.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ShrineSigdel/weather.git
    cd weather
    ```

2. **Install dependencies**:
    Make sure you have Node.js and npm installed on your machine. Then, install the project dependencies:
    ```bash
    npm install
    ```

3. **Create a `.env.local` file**:
   In the root of the project, create a `.env.local` file and add your WeatherAPI key. You can get an API key by signing up at [WeatherAPI](https://www.weatherapi.com/signup.aspx).

    ```bash
    NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

This project is already configured for deployment on Netlify. To deploy on Netlify:

1. **Create a new site on Netlify** and link it to your GitHub repository.
2. **Add environment variables** in Netlify:
   - `NEXT_PUBLIC_WEATHER_API_KEY` : Your WeatherAPI key.

Once deployed, your application will be live and accessible via the provided Netlify domain.

## Issues

If you encounter any issues or bugs, feel free to open an issue on GitHub.

## Contributing

Contributions are welcome! Feel free to fork this repository, make improvements, and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

**Author**: Shrine Sigdel  
**GitHub**: [ShrineSigdel](https://github.com/ShrineSigdel)

