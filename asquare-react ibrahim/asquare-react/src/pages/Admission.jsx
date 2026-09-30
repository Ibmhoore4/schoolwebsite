import { useState } from "react";

const steps = [
  { number: "01", label: "Make an enquiry" },
  { number: "02", label: "Visit or apply online" },
  { number: "03", label: "Welcome to 'A'SQUARE" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  entryLevel: "",
};

export default function Admission() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend is wired up yet — this simply confirms receipt in the UI.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">
      <section>
        <p className="text-xs font-bold tracking-[.18em] text-leaf">JOIN OUR COMMUNITY</p>
        <h1 className="mt-3 font-display text-5xl font-bold text-forest">
          Your journey starts with a conversation.
        </h1>

        <ol className="mt-10 space-y-6">
          {steps.map((step) => (
            <li key={step.number}>
              <b className="text-gold">{step.number}</b> {step.label}
            </li>
          ))}
        </ol>
      </section>

      {/* Admission enquiry form */}
      <form onSubmit={handleSubmit} className="rounded-2xl bg-forest p-8 text-white shadow-xl">
        <h2 className="font-display text-3xl font-bold">Make an enquiry</h2>

        <div className="mt-6 grid gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg p-3 text-ink"
            placeholder="Parent/Guardian name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg p-3 text-ink"
            placeholder="Email address"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="rounded-lg p-3 text-ink"
            placeholder="Phone number"
          />

          <select
            name="entryLevel"
            value={form.entryLevel}
            onChange={handleChange}
            required
            className="rounded-lg p-3 text-ink"
          >
            <option value="">Choose entry level</option>
            <option>Early Years</option>
            <option>Primary School</option>
            <option>Secondary School</option>
          </select>

          <button type="submit" className="rounded-full bg-gold p-3 font-bold text-forest">
            Speak to admissions →
          </button>

          {submitted && (
            <p className="text-center text-sm font-semibold text-gold">
              Thanks! We've received your enquiry and will be in touch soon.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
