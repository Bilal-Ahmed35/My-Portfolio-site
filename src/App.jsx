import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import ProjectDetail from "./pages/ProjectDetail";
import AllTechnologies from "./components/AllTechnologies";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/all-technologies" element={<AllTechnologies />} />
      </Routes>
    </>
  );
};

export default App;
