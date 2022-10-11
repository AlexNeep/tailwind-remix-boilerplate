import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { getOpenWeather12HourForecast } from "~/api/router";
import { WeatherRow } from "~/components/WeatherRow";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({ data, params }) => {
  const { location } = params;
  //update favicon based on data
  return { title: `Weather - ${location}` };
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log(request);
  const data = await getOpenWeather12HourForecast(0.1276, 51.5072);
  const { list } = data;

  const weatherData = list.map(
    ({
      dt,
      weather,
      main,
      wind,
    }: {
      dt: string;
      weather: { main: string; description: string }[];
      main: { temp: string };
      wind: { speed: string };
    }) => ({
      datetime: dt,
      weather: {
        title: weather[0].main,
        description: weather[0].description,
        temperature: main.temp,
        wind: wind.speed,
      },
    })
  );

  return json(weatherData);
};

export default function Index() {
  const [sizeSelectorPosition, setSizeSelectorPosition] = useState("");
  const weatherDataArray = useLoaderData();

  useEffect(() => {
    const onScroll = () => {
      const startAnimation = 50;

      if (window.scrollY > startAnimation) {
        setSizeSelectorPosition(
          `translate-y-[1000px] opacity-0 transition-all duration-[2000ms] ease-in-out hidden`
        );
      }

      if (window.scrollY < startAnimation) {
        setSizeSelectorPosition(
          `translate-y-[0] opacity-1 transition-translate duration-[1000ms] ease-in-out`
        );
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-primary-100 h-full md:h-screen">
      <section className="w-9/10 md:w-3/4 mx-auto p-8 text-center py-4">
        <div className="flex gap-4 flex-col">
          <h2 className="font-bold text-accent-900 text-2xl p-4">
            Hourly forecast
          </h2>

          {weatherDataArray?.length && (
            <WeatherRow weatherDataArray={weatherDataArray} />
          )}

          <div
            className={`bg-secondary-300 p-4 rounded-lg sticky bottom-0 ${sizeSelectorPosition} `}
          >
            I hide when you scroll down
          </div>
        </div>
      </section>
    </div>
  );
}
