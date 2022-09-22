export interface Temperature {
  Value: number;
  Unit: string;
  UnitType: string;
}

export interface WeatherData {
  DateTime: string;
  PrecipitationProbability: string;
  Temperature: Temperature;
  WeatherIcon: string;
  IconPhrase: string;
}
