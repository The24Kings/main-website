import React, { useEffect, useRef } from 'react'

import { useLocation } from "react-router";
import { motion } from 'framer-motion';

import { hoverNav, clickAnim } from "../utilities/Animation";

const Navigation = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const menuRef = useRef(null);

    useEffect(() => {
        if (menuRef.current === null) {
            return;
        }

        if (isOpen) {
            menuRef.current.classList.add("open");
        } else {
            menuRef.current.classList.remove("open");
        }
    }, [isOpen]);

    const switchWindow = (path) => {
        // Change the window location
        window.location.href = "/#/" + path;

        // Close the menu with a delay
        setTimeout(() => {
            setIsOpen(false);
        }, 50);
    };

    return (
        <React.Fragment>
            {isOpen && (
                <div className="nav-container" ref={menuRef}>
                    <img id="image" src="https://isoptera.lcsc.edu/~rjziegler/pictures/Logo.jpg" onClick={() => window.open("https://github.com/The24Kings")} title="Github" alt="Logo" />

                    <div id="info">
                        <h1>Riley Ziegler</h1>
                        <h4 id="github-link" title="Github" onClick={() => window.open("https://github.com/The24Kings")}>SOFTWARE DEVELOPER</h4>
                    </div>
                    <nav id="nav">
                        <ul id="nav-list">
                            <motion.li
                                id="nav-item"
                                className={location.pathname === "/" ? "active" : null}
                                variants={hoverNav} whileHover="hover" whileTap="click"
                                onClick={() => switchWindow("")}
                            >
                                Home
                            </motion.li>
                            <motion.li 
                                id="nav-item" 
                                className={location.pathname === "/about" ? "active" : null} 
                                variants={hoverNav} whileHover="hover" whileTap="click" 
                                onClick={() => switchWindow("about")}
                            >
                                About
                            </motion.li>
                            <motion.li 
                                id="nav-item" 
                                className={location.pathname === "/projects" ? "active" : null} 
                                variants={hoverNav} whileHover="hover" whileTap="click" 
                                onClick={() => switchWindow("projects")}
                            >
                                Projects
                            </motion.li>
                            <motion.li 
                                id="nav-item" 
                                className={location.pathname === "/contact" ? "active" : null}
                                variants={hoverNav} whileHover="hover" whileTap="click" 
                                onClick={() => switchWindow("contact")}
                            >
                                Contact
                            </motion.li>
                        </ul>
                    </nav>

                    <footer id="social">
                        <motion.img id="social-image" 
                            variants={clickAnim} whileTap="click" 
                            src="https://isoptera.lcsc.edu/~rjziegler/pictures/Github.png" 
                            onClick={() => window.open("https://github.com/The24Kings")} 
                            title="Github" alt="Link to Github"
                        />
                        <motion.img id="social-image" 
                            variants={clickAnim} whileTap="click" 
                            src="https://isoptera.lcsc.edu/~rjziegler/pictures/linkedin.png" 
                            onClick={() => window.open("https://linkedin.com/in/riley-ziegler/")} 
                            title="linkedin" alt="Link to Linkedin" 
                        />
                    </footer>
                </div>
            )}
        </React.Fragment>
    );
};

export default Navigation;