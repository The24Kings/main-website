import React from "react";
import { Routes, Route, HashRouter } from "react-router";
import { AnimatePresence } from "framer-motion";

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <AnimatePresence exitBeforeEnter={true}>
        <HashRouter>
            <Navigation/>

            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NoPage />} />
            </Routes>
        </HashRouter>
    </AnimatePresence>
  );
}

export default App;
