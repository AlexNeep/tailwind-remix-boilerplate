import type { FC } from "react";
import type { WeatherData } from "~/types";

export const WeatherCard: FC<WeatherData> = ({ datetime, weather }) => {
  const date = new Date(datetime * 1000);
  const hour = date.getHours();

  return (
    <div className=" bg-primary-600 rounded-lg w-full text-center p-4">
      {<h2 className="text-secondary-100 font-bold text-lg">{`${hour}:00`}</h2>}

      <div className="bg-primary-300 rounded shaddow-md px-4 py-2 ">
        <h4 className="text-white">{weather.title}</h4>
        <p className="text-white">{weather.description}</p>
      </div>

      <img
        src="/assets/umbrella.png"
        alt="umbrella"
        className="w-16 h-auto p-4 m-auto"
      />
      <p className="text-secondary-100">{weather.temperature}°</p>
    </div>
  );
};

export const ErrorBoundary = () => {
  return <div>Oh no something went wrong</div>;
};
