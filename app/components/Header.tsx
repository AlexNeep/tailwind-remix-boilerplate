import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <section className="h-16 w-full bg-primary-300 flex justify-start items-center p-8">
      <Link to="/">
        <img src="/assets/umbrella.png" alt="umbrella" className="w-8 h-8" />
      </Link>
    </section>
  );
};
