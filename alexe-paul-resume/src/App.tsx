import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import NoPage from "./pages/NoPage/NoPage";
import Contact from "./pages/Contact/Contact";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
