import type { FC } from "react";
import type { WeatherData } from "~/types";

export const WeatherCard: FC<WeatherData> = ({ DateTime, Temperature }) => {
  const unixDate = Date.parse(DateTime);
  const date = new Date(unixDate);
  const hour = date.getHours();

  return (
    <div className=" bg-primary-600 rounded-lg w-full text-center">
      {<h2 className="text-secondary-100 font-bold text-lg">{`${hour}:00`}</h2>}
      <img
        src="/assets/umbrella.png"
        alt="umbrella"
        className="w-16 h-auto p-4 m-auto"
      />
      <p>{Temperature?.Value}</p>
    </div>
  );
};

export const ErrorBoundary = () => {
  return <div>Oh no something went wrong</div>;
};
