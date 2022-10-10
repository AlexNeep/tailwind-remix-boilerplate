import { fetch, json } from "@remix-run/node";

export const getOpenWeather12HourForecast = async (
  longitude: number,
  latitude: number
) => {
  const response =
    process.env.NODE_ENV === "development"
      ? Promise.resolve(json(mockResponse))
      : fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.OPEN_WEATHER_API_KEY}`
        );

  return response
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== "200") {
        throw Error;
      }
      const shorterForecast = data.list.slice(0, 3);

      return { ...data, list: shorterForecast };
    })
    .catch((error) => {
      console.log(error);
      return;
    });
};

export const getLocation = async (cityName: string = "London") => {
  const LIMIT = 5;

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${LIMIT}&APPID=${process.env.OPEN_WEATHER_API_KEY}`;
  console.log(url);
  const response = fetch(url);
  return response
    .then((res) => res.json())
    .then(
      (data: { name: string; lat: string; lon: string; country: string }[]) => {
        const newRes = data.map((location) => ({
          name: location.name,
          lat: location.lat,
          lon: location.lon,
          country: location.country,
        }));

        return newRes;
      }
    )
    .catch((error) => {
      console.log(error);
      return;
    });
};

const mockResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1664312400,
      main: {
        temp: 3.63,
        feels_like: 4.63,
        temp_min: 4.22,
        temp_max: 5.63,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1008,
        humidity: 75,
        temp_kf: 0.41,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.99,
        deg: 38,
        gust: 3.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-09-27 21:00:00",
    },
    {
      dt: 1664323200,
      main: {
        temp: 2.63,
        feels_like: 3.63,
        temp_min: 4.22,
        temp_max: 4.63,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1006,
        humidity: 75,
        temp_kf: 0.2,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 3.31,
        deg: 13,
        gust: 3.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-09-28 00:00:00",
    },
    {
      dt: 1664334000,
      main: {
        temp: 4.43,
        feels_like: 5.43,
        temp_min: 6.43,
        temp_max: 7.43,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1008,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 1.52,
        deg: 170,
        gust: 1.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-09-28 03:00:00",
    },
  ],
  city: {
    id: 54746,
    name: "Lughaye",
    coord: {
      lat: 10.99,
      lon: 44.34,
    },
    country: "SO",
    population: 1000,
    timezone: 10800,
    sunrise: 1664247092,
    sunset: 1664290552,
  },
};
