import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Portal() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl flex-col items-center justify-center px-5 text-center text-forest">
      <img
        src={logo}
        alt="A'SQUARE Schools crest"
        className="h-32 w-32 rounded-full bg-white p-1 object-contain shadow-xl"
      />

      <p className="mt-7 text-xs font-bold tracking-[.18em]">A'SQUARE FAMILY PORTAL</p>

      <h1 className="mt-3 font-display text-5xl font-bold">Your child's progress, close at hand.</h1>

      <p className="mt-5 text-lg text-forest/70">
        Access results, reports, and school updates from our secure family portal.
      </p>

      <Link
        to="/check-result"
        className="mt-9 rounded-full bg-gold px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-yellow-300"
      >
        Open Result Checker →
      </Link>

      <Link to="/" className="mt-6 font-bold underline">
        Back to home
      </Link>
    </div>
  );
}
