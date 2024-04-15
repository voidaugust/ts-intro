import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "./pages/start"
import UserPage from "./pages/user"
import WeatherPage from "./pages/weather"
import CityPage from "./pages/city"
import Wrapper from "./components/Wrapper"
import ZooPage from "./pages/zoo/zoo"

export default function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/zoo" element={<ZooPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}