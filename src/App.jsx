import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/hero" element={<HeroPage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="/projects" element={<ProjectPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
  )
}

export default App
