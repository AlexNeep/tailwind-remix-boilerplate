import { Form, Outlet } from "@remix-run/react";
import { useState } from "react";
import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { Button, BUTTON_STYLES } from "~/components/Buttons";
import { getLocation } from "~/api/router";
import type { Location } from "~/api/router";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const inputLocation = formData.get("location") as string;
  if (!inputLocation) throw Error("No location provided");

  const locationResponse = await getLocation(inputLocation);
  if (!locationResponse) throw Error("No matching locations found");
  console.log(locationResponse);
  const { name, lat, lon, country } = locationResponse as Location;

  return redirect(`/location/${name}?lat=${lat}&lon=${lon}&country=${country}`);
};

export default function Index() {
  const [location, setLocation] = useState("London");

  return (
    <div className="bg-primary-100 h-full md:h-screen text-center">
      <section className="w-9/10 md:w-3/4 mx-auto p-8 text-center py-4">
        <Form method="post" action="/location/">
          <label className="font-bold text-xl text-accent-900">
            Enter your location
          </label>
          <input
            className="p-2 w-full rounded-lg my-4 shadow-lg active:shadow-2xl focus:shadow-2xl text-accent-900"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button styles={BUTTON_STYLES.SECONDARY} type="submit">
            Do I need an umbrella?
          </Button>
        </Form>
      </section>

      <Outlet />
    </div>
  );
}
