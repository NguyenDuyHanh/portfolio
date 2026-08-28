import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/Home/index.jsx";
import ProjectDetailPage from "./pages/ProjectDetail.jsx";
import Welcome from "./pages/Welcome.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <ScrollToTop />
      {/* Welcome overlay */}
      {showWelcome && (
        <Welcome visible={showWelcome} onFinish={() => setShowWelcome(false)} />
      )}
      <Routes>
        <Route path="/" element={<HomePage isWelcomeActive={showWelcome} />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<HomePage isWelcomeActive={showWelcome} />} />
      </Routes>
    </>
  );
}

export default App;
