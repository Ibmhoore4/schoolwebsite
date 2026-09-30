import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const classes = [
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
  "JSS 1",
  "JSS 2",
  "JSS 3",
  "SSS 1",
  "SSS 2",
  "SSS 3",
];

const terms = ["First Term", "Second Term", "Third Term"];

const initialForm = {
  name: "",
  className: "",
  term: "",
  level: "",
};

export default function CheckResult() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No results backend is wired up yet — this simply confirms the submission in the UI.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-forest px-5 py-10 font-sans text-forest sm:py-16">
      <main className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border-4 border-gold bg-cream shadow-2xl">
        <header className="border-b-4 border-gold bg-forest px-6 py-9 text-center text-white">
          <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border-4 border-gold bg-white p-2 shadow-xl">
            <img src={logo} alt="A'SQUARE Schools crest" className="h-full w-full rounded-full object-contain" />
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-gold">
            "A" SQUARE COMPREHENSIVE SCHOOLS
          </p>

          <h1 className="mt-2 font-display text-4xl font-bold">Result Portal</h1>
          <p className="mt-2 text-sm text-white/75">
            137, Isuti Road, Moonlight Bustop, Egan, Alimosho LGA Lagos State
          </p>
        </header>

        <section className="p-6 sm:p-10">
          <div className="grid gap-4 rounded-2xl border border-gold bg-white p-5 text-sm sm:grid-cols-2">
            <p>
              <b className="block text-forest">Name</b>"A"SQUARE Educational Services
            </p>
            <p>
              <b className="block text-forest">Address</b>137, Isuti Road, Moonlight Bustop, Egan,
              Alimosho LGA Lagos State
            </p>
            <p>
              <b className="block text-forest">Gmail</b>hello@asquareeducationalservices@gmail.com
            </p>
            <p>
              <b className="block text-forest">Number</b>+234 8053013052, 08067701796
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-leaf">STUDENT RESULT CHECKER</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Enter student details</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-7 grid gap-5 rounded-2xl border-2 border-gold bg-white p-5 sm:p-7"
          >
            <label className="font-semibold">
              Student Name
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="mt-2 w-full rounded-lg border-2 border-forest/20 bg-cream px-4 py-3 outline-none focus:border-leaf"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="font-semibold">
                Class
                <select
                  required
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border-2 border-forest/20 bg-cream px-4 py-3 outline-none focus:border-leaf"
                >
                  <option value="">Select class</option>
                  {classes.map((cls) => (
                    <option key={cls}>{cls}</option>
                  ))}
                </select>
              </label>

              <label className="font-semibold">
                Term
                <select
                  required
                  name="term"
                  value={form.term}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border-2 border-forest/20 bg-cream px-4 py-3 outline-none focus:border-leaf"
                >
                  <option value="">Select term</option>
                  {terms.map((term) => (
                    <option key={term}>{term}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset>
              <legend className="font-semibold">School Level</legend>

              <div className="mt-3 flex flex-wrap gap-3">
                <label className="cursor-pointer rounded-full border-2 border-forest px-4 py-2 text-sm font-bold">
                  <input
                    required
                    type="radio"
                    name="level"
                    value="Primary"
                    checked={form.level === "Primary"}
                    onChange={handleChange}
                    className="accent-leaf"
                  />{" "}
                  Primary
                </label>

                <label className="cursor-pointer rounded-full border-2 border-forest px-4 py-2 text-sm font-bold">
                  <input
                    type="radio"
                    name="level"
                    value="Secondary"
                    checked={form.level === "Secondary"}
                    onChange={handleChange}
                    className="accent-leaf"
                  />{" "}
                  Secondary
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-2 rounded-full bg-gold px-6 py-4 font-bold text-forest shadow-md transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Check Result →
            </button>

            {submitted && (
              <p className="text-center text-sm font-semibold text-leaf">
                Thanks, {form.name || "there"}! Results for {form.className || "your class"} —{" "}
                {form.term || "the selected term"} aren't connected to a database yet, but your
                request went through.
              </p>
            )}
          </form>
        </section>

        <footer className="bg-forest px-6 py-5 text-center">
          <Link to="/" className="font-bold text-gold underline underline-offset-4">
            ← Return to home
          </Link>
        </footer>
      </main>
    </div>
  );
}
