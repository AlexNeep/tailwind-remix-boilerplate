import { useLoaderData } from "@remix-run/react";
import type { FC } from "react";
import { db } from "~/utils/firebase.server";

// export const loader = async () => {
//   // const snapshot = await db.collection("users").get();
//   // console.log(snapshot);
// };

export default function Index() {
  return (
    <div className="bg-primary-100 h-screen">
      <section className="bg-primary-100 w-3/4 mx-auto rounded m-16 p-8 text-center py-4">
        <h1 className="font-bold text-primary-600 text-3xl pb-4">
          Do I need an umbrella?
        </h1>
        <div className="flex gap-4 flex-col">
          <div className="flex justify-center text-center gap-4 ">
            <WeatherCard day="Monday" />
            <WeatherCard day="Tuesday" />
            <WeatherCard day="Wednesday" />
            <WeatherCard day="Thursday" />
            <WeatherCard day="Friday" />
          </div>

          <div className="flex justify-center text-center gap-4 ">
            <WeatherCard time="17:00" />
            <WeatherCard time="18:00" />
            <WeatherCard time="19:00" />
            <WeatherCard time="20:00" />
            <WeatherCard time="21:00" />
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
    <div className=" bg-primary-600 rounded">
      {<h2 className="text-secondary-100 font-bold text-lg">{day || time}</h2>}

      <img
        src="/assets/umbrella.png"
        alt="umbrella"
        className="w-32 h-auto p-4"
      />
    </div>
  );
};
