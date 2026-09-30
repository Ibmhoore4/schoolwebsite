import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Academics from "./pages/Academics.jsx";
import Admission from "./pages/Admission.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Portal from "./pages/Portal.jsx";
import CheckResult from "./pages/CheckResult.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* The result checker keeps its own standalone page chrome,
            matching the original standalone "Check out result.html" */}
        <Route path="/check-result" element={<CheckResult />} />

        {/* Every other page shares the site Navbar / Footer / BackToTop */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/academics"
          element={
            <Layout>
              <Academics />
            </Layout>
          }
        />
        <Route
          path="/admission"
          element={
            <Layout>
              <Admission />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/portal"
          element={
            <Layout>
              <Portal />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
