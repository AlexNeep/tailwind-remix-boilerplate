import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { Button, BUTTON_STYLES } from "~/components/Buttons";

export const meta: MetaFunction = () => {
  return { title: "Home" };
};

export default function Index() {
  return (
    <div className="bg-primary-100 h-full md:h-screen text-center p-10">
      <h1>This is the home page</h1>

      <Link to="/location/">
        <Link to="/location/">
          <Button styles={BUTTON_STYLES.SECONDARY}>Start loction search</Button>
        </Link>
      </Link>
      <Outlet />
    </div>
  );
}
