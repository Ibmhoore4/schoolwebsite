import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Client-side routing doesn't reset scroll position automatically the way
// full page navigation used to across the original .html files, so this
// restores that behaviour on every route change.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
