import { Link } from "react-router-dom";
import schoolBuilding from "../assets/school-building.jpeg";

export default function Home() {
  return (
    <>
      {/* Welcome hero section */}
      <section className="relative isolate flex min-h-[690px] items-center justify-center overflow-hidden px-5 text-center text-white">
        <img
          src={schoolBuilding}
          alt="A'SQUARE school building"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55 shadow-[inset_0_0_90px_rgba(0,0,0,0.55)]"></div>

        <div className="mx-auto max-w-3xl">
          <p className="inline-block rounded-full border border-gold bg-black/20 px-4 py-2 text-xs font-bold tracking-[.18em] text-gold">
            WELCOME TO "A"SQUARE
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Your Success Starts Here.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
           For qualitative and affordable education in conducive learning environment with seasoned teaching and non-teaching staff.
          </p>

          <Link
            to="/check-result"
            className="mt-9 inline-block rounded-full bg-gold px-8 py-4 font-bold text-forest shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            Check out Result →
          </Link>
        </div>
      </section>

      {/* Mission, vision cards */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-lg transition hover:-translate-y-1">
          <p className="text-xs font-bold tracking-[0.18em] text-leaf">OUR MISSION</p>
          <h2 className="mt-3 font-display text-2xl font-bold">Learning that lasts a lifetime</h2>
          <p className="mt-3 leading-7 text-forest/70">
           To educate children and to raise high level matured educated Nigerian no matter how less privilege or how wealthy they are.
          </p>
        </article>

        <article className="rounded-2xl bg-forest p-7 text-white shadow-lg transition hover:-translate-y-1">
          <p className="text-xs font-bold tracking-[0.18em] text-gold">OUR VISION</p>
          <h2 className="mt-3 font-display text-2xl font-bold">Shaping tomorrow's leaders</h2>
          <p className="mt-3 leading-7 text-white/75">
            To give qualitative education at an affordable fee in a conducive environment with seasoned and skills teaching and non-teaching staff
          </p>
        </article>
      </section>

      {/* News marquee */}
      <div className="border-y border-yellow-200 bg-yellow-100 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 text-sm">
          <span className="shrink-0 rounded bg-gold px-2 py-1 text-xs font-extrabold text-forest">NEWS</span>
          <div className="flex-1 overflow-hidden">
            <p className="animate-marquee whitespace-nowrap font-medium text-ink">
              Entrance examinations begin 14 June — applications close 7 June.
            </p>
          </div>
          <Link to="/admission" className="ml-auto hidden whitespace-nowrap font-bold text-forest sm:inline">
            Learn more →
          </Link>
        </div>
      </div>

      {/* School life section */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-20">
        <div className="grid overflow-hidden rounded-3xl bg-forest shadow-xl lg:grid-cols-2">
          <article className="flex min-h-[470px] flex-col justify-center p-8 text-white sm:p-12">
            <p className="text-xs font-bold tracking-[.18em] text-gold">LIFE AT "A"SQUARE</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              A place to learn, grow, and belong.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-white/80">
              At "A"square, we believe that education goes beyond the classroom. We are committed to providing an inspiring environment where students can discover their talents, develop confidence and build the knowledge they need to succeed.
              Our dedicated teachers work closely with students to encourage academic excellence, creativity, discipline and good character. We prepare young minds to become responsible leaders who can make a positive impact in their communities and the world.
            </p>
            <Link
              to="/academics"
              className="mt-8 w-fit rounded-full bg-gold px-6 py-3 font-bold text-forest transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Discover school life →
            </Link>
          </article>

          <div className="grid min-h-[470px] gap-3 bg-gold p-3 sm:grid-rows-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={schoolBuilding}
                alt="A'SQUARE school campus"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={schoolBuilding}
                alt="A'SQUARE school building"
                className="h-full w-full object-cover object-bottom transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
