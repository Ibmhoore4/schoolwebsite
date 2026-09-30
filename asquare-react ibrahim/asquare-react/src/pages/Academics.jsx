const programmes = [
  {
    ages: "AGES 2–5",
    title: "Early Years",
    description: "A warm, play-based foundation that welcomes curiosity and builds confidence.",
  },
  {
    ages: "AGES 5–11",
    title: "Primary School",
    description: "Strong fundamentals, bright ideas, and character in action every day.",
  },
  {
    ages: "AGES 11–16",
    title: "Secondary School",
    description: "Purposeful learning that prepares students for their next chapter.",
  },
];

export default function Academics() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="text-xs font-bold tracking-[.18em] text-leaf">LEARNING AT "A"SQUARE</p>
      <h1 className="mt-3 font-display text-5xl font-bold text-forest">
        A confident start, at every stage.
      </h1>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {programmes.map((programme) => (
          <article
            key={programme.title}
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1"
          >
            <p className="font-bold text-leaf">{programme.ages}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-forest">{programme.title}</h2>
            <p className="mt-4 leading-7 text-ink/70">{programme.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
