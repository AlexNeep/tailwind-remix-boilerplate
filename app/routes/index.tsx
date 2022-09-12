import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/firebase.server";

// export const loader = async () => {
//   // const snapshot = await db.collection("users").get();
//   // console.log(snapshot);
// };

export default function Index() {
  return (
    <div>
      <h1 className=" font-bold  text-blue-600">Welcome to Remix</h1>
    </div>
  );
}
