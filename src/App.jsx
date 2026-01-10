import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/Home/index.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome.jsx";
import Showcase from "./pages/Showcase";
import Resume from "./pages/Resume.jsx";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {/* Welcome overlay */}
      {showWelcome && (
        <Welcome visible={showWelcome} onFinish={() => setShowWelcome(false)} />
      )}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
