import { user, weather, city } from './db'
import { GetUserData, GetWeatherData, GetCityData } from '../types'

export const getUserData: GetUserData = () => user
export const getWeatherData: GetWeatherData = () => weather
export const getCityData: GetCityData = () => city