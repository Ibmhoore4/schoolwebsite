export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="back-to-top"
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-gold text-forest shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}
