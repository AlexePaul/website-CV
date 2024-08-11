import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import NoPage from "./pages/NoPage";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
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
