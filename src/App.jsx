import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToHash";


export default function App() {
  return (
    <>
          <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Project details page */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}
