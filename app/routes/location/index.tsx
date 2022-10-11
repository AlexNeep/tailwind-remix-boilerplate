import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Weather - Select Location" };
};

export default function Index() {
  return (
    <div className="bg-primary-100 h-full md:h-screen">
      <h1>You need to select a city</h1>
    </div>
  );
}
