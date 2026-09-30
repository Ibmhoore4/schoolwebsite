import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/academics", label: "Academics" },
  { to: "/admission", label: "Admission" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="A'SQUARE Schools crest" className="h-14 w-14 object-contain" />
          <span>
            <strong className="block font-display text-lg text-forest">&quot;A&quot;SQUARE</strong>
            <small className="block text-[10px] font-bold tracking-[.2em] text-leaf">EDUCATIONAL SERVICES</small>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 text-sm font-bold lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-leaf ${isActive ? "text-leaf" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/portal"
            className="rounded-full bg-gold px-5 py-2.5 text-forest transition hover:bg-yellow-300"
          >
            Portal
          </Link>
        </nav>

        {/* Mobile toggle button */}
        <button
          id="menu-button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-forest/20 text-forest lg:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        className={`${open ? "" : "hidden"} border-t border-forest/10 bg-white px-5 py-4 lg:hidden`}
      >
        <div className="flex flex-col gap-1 font-semibold">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 ${isActive ? "bg-cream text-leaf" : "hover:bg-cream"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/portal"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-gold px-4 py-3 text-center text-forest"
          >
            Portal
          </Link>
        </div>
      </nav>
    </header>
  );
}
