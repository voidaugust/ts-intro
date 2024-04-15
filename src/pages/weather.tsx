import { getWeatherData } from "../api/data"
import HomeLink from "../components/HomeLink"

export default function WeatherPage() {
  const weather = getWeatherData()
  const weatherString = `${weather.light}, ${weather.sky}, ${weather.cold ? "cold" : "not cold"}`.toLowerCase()
  return <>
    <HomeLink />
    { weather && 
      <h3>
        Today: {weatherString}, temperature {weather.temperature}°C
      </h3>
    }
  </>
}