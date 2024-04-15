import { getCityData } from "../api/data"
import HomeLink from "../components/HomeLink"

export default function CityPage() {
  const city = getCityData()
  return <>
    <HomeLink />
    { city && 
      <h3>
        {city.europe ? "🇪🇺" : "👹"} {city.name}, {city.country},
        population: {city.population} people
      </h3>
    }
  </>
}