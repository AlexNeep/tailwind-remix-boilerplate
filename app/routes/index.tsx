import { Form, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { json } from "@remix-run/node";
// import { db } from "~/utils/firebase.server";

export const loader = async () => {
  // const snapshot = await db.collection("users").get();
  // console.log(snapshot);
  return json([]);
};

// export const action = async () => {};

export default function Index() {
  const [sizeSelectorPosition, setSizeSelectorPosition] = useState("");
  const [location, setLocation] = useState("London");

  const weatherData = useLoaderData();
  console.log(weatherData);

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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <WeatherCard day="Monday" />
            <WeatherCard day="Tuesday" />
            <WeatherCard day="Wednesday" />
            <WeatherCard day="Thursday" />
            <WeatherCard day="Friday" />
          </div>

          <h2 className="font-bold text-accent-900 text-2xl p-4">
            Hourly forecast
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <WeatherCard time="17:00" />
            <WeatherCard time="18:00" />
            <WeatherCard time="19:00" />
            <WeatherCard time="20:00" />
            <WeatherCard time="21:00" />
          </div>

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

interface weatherStatus {}

interface WeatherCardProps {
  day?: String;
  time?: String;
}

const WeatherCard: FC<WeatherCardProps> = ({ day, time }) => {
  return (
    <div className=" bg-primary-600 rounded-lg w-full text-center">
      {<h2 className="text-secondary-100 font-bold text-lg">{day || time}</h2>}
      <img
        src="/assets/umbrella.png"
        alt="umbrella"
        className="w-16 h-auto p-4 m-auto"
      />
    </div>
  );
};
