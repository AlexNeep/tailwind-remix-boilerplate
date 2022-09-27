import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="bg-primary-100 h-full md:h-screen text-center p-10">
      <h1>You are home</h1>

      <Link to="/location/">
        <button className="bg-primary-600">Start location search</button>
      </Link>
      <Outlet />
    </div>
  );
}
