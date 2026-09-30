import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "./BackToTop.jsx";

export default function Layout({ children }) {
  return (
    <div className="bg-cream font-sans text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
