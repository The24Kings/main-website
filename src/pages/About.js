import React, { useState, useEffect } from "react";

import Spoiler from "../utils";

const About = () => {
    useEffect(() => {
        document.title = "About - Riley Ziegler";
    }, []);
    
    return (
        <React.Fragment>
            <div className="container">
                <h1 id="about-header">About me!</h1>

                {/*TODO: Add a professional picture with a link to my resume */}

                <div className="about">
                    <h2 id="about-title">⮟ What do I do?</h2>
                </div>

                <div className="about-lists">
                    <div className="list-content">
                        <h3 className="list-title">
                            <u>Skills</u>
                        </h3>
                        <ul id="list-items">
                            <li id="item">Python</li>
                            <li id="item">C++</li>
                            <li id="item">C</li>
                            <li id="item">Rust</li>
                            <li id="item">Java</li>
                            <li id="item">MySQL</li>
                            <li id="item">Bash</li>
                            <li id="item">Git</li>
                            <li id="item">TCP/ UDP</li>
                            <li id="item">Linux/ Unix</li>
                        </ul>
                    </div>

                    <div className="list-content">
                        <h3 className="list-title">
                            <u>Interests</u>
                        </h3>
                        
                        <ul id="list-items">
                            <li id="item">3D Printing</li>
                            <li id="item">Painting</li>
                            <li id="item">Origami</li>
                            <li id="item">The Legend of Zelda</li>
                            <li id="item">Software Engineering</li>
                            <li id="item">Biking</li>
                            <li id="item">Roller Blading</li>
                            <li id="item">EDM</li>
                            <li id="item">Anime</li>
                        </ul>
                    </div>
                </div>

                <Spoiler title="Publications">
                    <ul id="publications-list">
                        <li id="publications-item">
                            Ziegler, R., & Addo-Quaye, C. (2023). Analysis of Natural Variation in 30 Sorghum Landraces. <br/>
                            <a href="https://scholarworks.boisestate.edu/icur/2023/poster_session/86/">https://scholarworks.boisestate.edu/icur/2023/poster_session/86/</a> 
                        </li>
                    </ul>
                </Spoiler>
            </div>
        </React.Fragment>
    )
};

export default About;