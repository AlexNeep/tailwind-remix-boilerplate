import { useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);
  const location = "London";
  console.log(location);
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
