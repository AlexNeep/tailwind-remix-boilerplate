export interface Weather {
  title: string;
  description: string;
  temperature: number;
  wind: number;
}
export interface WeatherData {
  datetime: number;
  weather: Weather;
}
