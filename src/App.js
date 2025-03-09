import React, { useState } from "react";
import { Routes, Route, HashRouter } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { clickAnim } from "./utilities/Animation";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const menuColor = "#2F3E46";

    return (
        <AnimatePresence exitBeforeEnter={true}>
            <HashRouter>
                <header>
                    <motion.svg 
                        className="menu-toggle" 
                        variants={clickAnim} whileTap="click"
                        viewBox="0 0 24 24" fill="none" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <path d="M4 18L20 18" stroke={menuColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12L20 12" stroke={menuColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 6L20 6" stroke={menuColor} strokeWidth="2" strokeLinecap="round" />
                    </motion.svg>
                </header>

                <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

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
