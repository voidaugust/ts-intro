interface IUser {
  name: string;
  surname: string;
  age: number;
}

interface IWeather {
  light: string;
  sky: string;
  cold: boolean;
  temperature: number;
}

interface ICity {
  name: string;
  country: string;
  population: number;
  europe: boolean;
}

export type GetUserData = () => IUser
export type GetWeatherData = () => IWeather
export type GetCityData = () => ICity