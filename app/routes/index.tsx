import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { db } from "~/utils/firebase.server";

// export const loader = async () => {
//   // const snapshot = await db.collection("users").get();
//   // console.log(snapshot);
// };

export default function Index() {
  const [sizeSelectorPosition, setSizeSelectorPosition] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const startAnimation = 50;
      if (window.scrollY > startAnimation) {
        setSizeSelectorPosition(
          `translate-y-[1000px] opacity-0 transition-translate duration-[2000ms] ease-in-out`
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
      <section className=" w-3/4 mx-auto rounded-  p-8 text-center py-4">
        <h1 className="font-bold text-primary-600 text-3xl pb-4">
          Do I need an umbrella?
        </h1>

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
            Hide me as you scroll
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
