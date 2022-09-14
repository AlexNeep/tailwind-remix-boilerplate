import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/firebase.server";

// export const loader = async () => {
//   // const snapshot = await db.collection("users").get();
//   // console.log(snapshot);
// };

export default function Index() {
  return (
    <div>
      <section className="text-center py-4">
        <h1 className="font-bold text-primary-600">Do I need an umbrella?</h1>
      </section>
    </div>
  );
}
