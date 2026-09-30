import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function ContactUs() {
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
        <p className="text-xs font-bold tracking-[.18em] text-leaf">CONTACT US</p>
        <h1 className="mt-3 font-display text-5xl font-bold text-forest">We'd love to hear from you.</h1>

        <div className="mt-8 space-y-5 leading-7">
          <p>
            <b>Phone</b>
            <br />
            +234 8053013052, +234 8067701796
          </p>
          <p>
            <b>Email</b>
            <br />
            hello@asquareeducationalservices@gmail.com
          </p>
          <p>
            <b>Address</b>
            <br />
           137, Isuti Road, Moonlight Bus-Stop, Egan, Alimosho LGA, Lagos State
          </p>
          <a
            className="font-bold text-leaf underline"
            href="https://www.google.com/maps/@6.5787822,3.2081002,15z?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            Open Google Maps ↗
          </a>
        </div>
      </section>

      {/* Contact message form */}
      <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="font-display text-3xl font-bold text-forest">Send a message</h2>

        <div className="mt-6 grid gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-forest/20 p-3"
            placeholder="Your name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-forest/20 p-3"
            placeholder="Email address"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="rounded-lg border border-forest/20 p-3"
            placeholder="How can we help?"
          />
          <button type="submit" className="rounded-full bg-forest p-3 font-bold text-white">
            Send message →
          </button>

          {submitted && (
            <p className="text-center text-sm font-semibold text-leaf">
              Thanks — your message has been sent!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
