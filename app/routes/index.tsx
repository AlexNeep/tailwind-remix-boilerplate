import { Form, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import { get12HourForecast } from "~/api/router";
import { WeatherRow } from "~/components/WeatherRow";

export const loader = async () => {
  const locationKey = 328328;

  const hourlyForecast = await get12HourForecast(locationKey);

  return json({ hourlyForecast });
};

// export const action = async () => {};

export default function Index() {
  const [sizeSelectorPosition, setSizeSelectorPosition] = useState("");
  const [location, setLocation] = useState("London");

  const data = useLoaderData();
  const { hourlyForecast } = data;

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
    <div className="bg-primary-100 h-full">
      <section className="w-9/10 md:w-3/4 mx-auto p-8 text-center py-4">
        <Form>
          <label className="font-bold text-xl text-accent-900">
            Enter your location
          </label>
          <input
            className="p-2 w-full rounded-lg my-4 shadow-lg active:shadow-2xl focus:shadow-2xl"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            className="font-bold w-full bg-accent-900 text-primary-100 rounded-lg shadow-lg m-auto text-center text-md p-4"
          >
            Do I need an umbrella?
          </button>
        </Form>

        <h2 className="font-bold text-accent-900 text-2xl p-4">
          Daily forecast
        </h2>

        <div className="flex gap-4 flex-col">
          <h2 className="font-bold text-accent-900 text-2xl p-4">
            Hourly forecast
          </h2>

          {hourlyForecast && <WeatherRow weatherDataArray={hourlyForecast} />}

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
