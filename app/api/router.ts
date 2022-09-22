import { fetch } from "@remix-run/node";

export const get12HourForecast = async (locationKey: number) => {
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
