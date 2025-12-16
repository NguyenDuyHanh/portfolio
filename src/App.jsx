import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx"; 
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
  );
}

export default App;
