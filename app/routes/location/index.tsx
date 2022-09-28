import { useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Weather - Select Location" };
};

export const action: ActionFunction = async ({ request }) => {
  console.log(request);
  const location = "London";
  return redirect(`/location/${location}`);
};

export default function Index() {
  const actionData = useActionData();
  console.log(actionData);

  return (
    <div className="bg-primary-100 h-full md:h-screen">
      <h1>You need to select a city</h1>
    </div>
  );
}
