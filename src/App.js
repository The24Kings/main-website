import React from "react";
import { Routes, Route, HashRouter } from "react-router";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import transition from "./utilities/Animation";

function App() {
  return (
    <AnimatePresence exitBeforeEnter={true}>
        <HashRouter>
            <main>
                <Navigation/>

                <motion.div 
                    className="container" 
                    variants={transition}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/*" element={<NoPage />} />
                </Routes>
                </motion.div>
            </main>
        </HashRouter>
    </AnimatePresence>
  );
}

export default App;
