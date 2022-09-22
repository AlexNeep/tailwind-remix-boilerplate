import { fetch } from "@remix-run/node";

export const getAccu12HourForecast = async (locationKey: number) => {
  return fetch(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${process.env.ACCU_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.Code !== "ServiceUnavailable") {
        return data;
      }

      throw Error;
    })
    .catch(() => [
      { DateTime: new Date(), Temperature: { Value: 18 } },
      { DateTime: new Date(), Temperature: { Value: 19 } },
      { DateTime: new Date(), Temperature: { Value: 20 } },
      { DateTime: new Date(), Temperature: { Value: 22 } },
      { DateTime: new Date(), Temperature: { Value: 22 } },
    ]);
};

export const getOpenWeather12HourForecast = async (
  longitude: number,
  latitude: number
) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${process.env.OPEN_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== "200") {
        throw Error;
      }

      const twelveHourForecast = data.list.slice(0, 4);

      return { ...data, list: twelveHourForecast };
    })
    .catch((error) => {
      console.log(error);
      return [
        { DateTime: new Date(), Temperature: { Value: 18 } },
        { DateTime: new Date(), Temperature: { Value: 19 } },
        { DateTime: new Date(), Temperature: { Value: 20 } },
        { DateTime: new Date(), Temperature: { Value: 22 } },
        { DateTime: new Date(), Temperature: { Value: 22 } },
      ];
    });
};
