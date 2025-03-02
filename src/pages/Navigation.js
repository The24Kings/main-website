import React from 'react'

import { Link, useLocation } from "react-router";
import { motion } from 'framer-motion';

const Navigation = () => {
    const location = useLocation();

    const hoverNav = {
        hover: {
            scale: 1.05
        }
    };

    return (
        <React.Fragment>
            <div className="nav-container">
                <div className="pfp">
                    <img id="image" src="https://isoptera.lcsc.edu/~rjziegler/pictures/Logo.jpg" onClick={() => window.open("https://github.com/The24Kings")} title="Github" alt="Logo"/>
                </div>

                <div id="info">
                    <h1>Riley Ziegler</h1>
                    <h5 id="github-link" title="Github" onClick={() => window.open("https://github.com/The24Kings")}>SOFTWARE DEVELOPER</h5>
                </div>

                <nav id="nav">
                    <ul id="nav-list">
                        <li id="nav-item">
                            <motion.div variants={hoverNav} whileHover="hover">
                                <Link to="/" className={location.pathname === "/" ? "active" : null}>Home</Link>
                            </motion.div>
                        </li>
                        <li id="nav-item">
                            <motion.div variants={hoverNav} whileHover="hover">
                                <Link to="/about" className={location.pathname === "/about" ? "active" : null}>About</Link>
                            </motion.div>
                        </li>
                        <li id="nav-item">
                            <motion.div variants={hoverNav} whileHover="hover">
                                <Link to="/projects" className={location.pathname === "/projects" ? "active" : null}>Projects</Link>
                            </motion.div>
                        </li>
                        <li id="nav-item">
                            <motion.div variants={hoverNav} whileHover="hover">
                                <Link to="/contact" className={location.pathname === "/contact" ? "active" : null}>Contact</Link>
                            </motion.div>
                        </li>
                    </ul>
                </nav>

                <footer id="social">
                    <img id="social-image" src="https://isoptera.lcsc.edu/~rjziegler/pictures/Github.png" onClick={() => window.open("https://github.com/The24Kings")} title="Github" alt="Link to Github"/>
                    <img id="social-image" src="https://isoptera.lcsc.edu/~rjziegler/pictures/linkedin.png" onClick={() => window.open("https://linkedin.com/in/riley-ziegler/")} title="linkedin" alt="Link to Linkedin"/>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default Navigation;