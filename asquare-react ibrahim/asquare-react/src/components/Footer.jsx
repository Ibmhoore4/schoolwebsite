import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-forest px-5 py-10 text-center text-white">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-gold bg-white p-1">
        <img src={logo} alt="A'SQUARE Schools crest" className="h-full w-full object-contain" />
      </div>
      <p className="mt-4 font-display text-xl font-bold">A'SQUARE Schools</p>
      <p className="mt-1 text-sm text-white/70">Excellence is our ultimate goal.</p>
      <p className="mt-6 text-xs text-white/50">© 2026 A'SQUARE Schools. All rights reserved.</p>
    </footer>
  );
}
