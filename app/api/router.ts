import { fetch, json } from "@remix-run/node";

export const getOpenWeather12HourForecast = async (
  longitude: number,
  latitude: number
) => {
  console.log(process.env.NODE_ENV === "development");

  const request =
    process.env.NODE_ENV === "development"
      ? Promise.resolve(json(mockResponse))
      : fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${process.env.OPEN_WEATHER_API_KEY}`
        );

  return request
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

const mockResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1664312400,
      main: {
        temp: 304.63,
        feels_like: 311.63,
        temp_min: 304.22,
        temp_max: 304.63,
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
        temp: 304.44,
        feels_like: 311.44,
        temp_min: 304.24,
        temp_max: 304.44,
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
        temp: 304.43,
        feels_like: 311.43,
        temp_min: 304.43,
        temp_max: 304.43,
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
    {
      dt: 1664344800,
      main: {
        temp: 304.31,
        feels_like: 311.31,
        temp_min: 304.31,
        temp_max: 304.31,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 3.19,
        deg: 171,
        gust: 3.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-09-28 06:00:00",
    },
    {
      dt: 1664355600,
      main: {
        temp: 305.16,
        feels_like: 309.95,
        temp_min: 305.16,
        temp_max: 305.16,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1007,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.58,
        deg: 266,
        gust: 0.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-09-28 09:00:00",
    },
    {
      dt: 1664366400,
      main: {
        temp: 306.11,
        feels_like: 310.87,
        temp_min: 306.11,
        temp_max: 306.11,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1004,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 3.45,
        deg: 23,
        gust: 3.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-09-28 12:00:00",
    },
    {
      dt: 1664377200,
      main: {
        temp: 305.32,
        feels_like: 311.92,
        temp_min: 305.32,
        temp_max: 305.32,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1004,
        humidity: 64,
        temp_kf: 0,
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
        speed: 4.57,
        deg: 23,
        gust: 4.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-09-28 15:00:00",
    },
    {
      dt: 1664388000,
      main: {
        temp: 305.21,
        feels_like: 311.64,
        temp_min: 305.21,
        temp_max: 305.21,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 64,
        temp_kf: 0,
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
        all: 1,
      },
      wind: {
        speed: 2.72,
        deg: 121,
        gust: 3.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-09-28 18:00:00",
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
