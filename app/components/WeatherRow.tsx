import type { FC } from "react";
import type { WeatherData } from "~/types";
import { WeatherCard } from "./WeatherCard";

interface WeatherDataRow {
  weatherDataArray: WeatherData[];
}

export const WeatherRow: FC<WeatherDataRow> = ({ weatherDataArray = [] }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      {weatherDataArray.map((weatherData, index) => {
        return <WeatherCard key={index} {...weatherData} />;
      })}
    </div>
  );
};

export const ErrorBoundary = () => {
  return <div>Oh no something went wrong</div>;
};
