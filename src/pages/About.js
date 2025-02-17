import React, { useEffect, useState } from "react";

import Spoiler from "../utilities/Spoiler";

const About = () => {
    const [showSkills, setShowSkills] = useState(false);
    const [showInterests, setShowInterests] = useState(false);
    const [showCourses, setShowCourses] = useState(false);

    useEffect(() => {
        document.title = "About - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="about-header">About me!</h1>

                <Spoiler title="Information" visible={true} noToggle={true}>
                    <div className="list-content">
                        <h2 className="list-title">
                            <u><a onClick={() => setShowSkills(!showSkills)}>Skills</a></u>
                        </h2>
                        {showSkills && (
                            <table id="list-items">
                                <tbody>
                                    <tr>
                                        <td id="item">Python</td>
                                        <td id="item">C++</td>
                                        <td id="item">C</td>
                                        <td id="item">Rust</td>
                                        <td id="item">Java</td>
                                    </tr>
                                    <tr>
                                        <td id="item">MySQL</td>
                                        <td id="item">Bash</td>
                                        <td id="item">Git</td>
                                        <td id="item">TCP/ UDP</td>
                                        <td id="item">Linux/ Unix</td>
                                    </tr>
                                    <tr>
                                        <td id="item">HTML</td>
                                        <td id="item">CSS</td>
                                        <td id="item">JavaScript</td>
                                        <td id="item">React</td>
                                        <td id="item">Node.js</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div className="list-content">
                        <h2 className="list-title">
                            <u><a onClick={() => setShowInterests(!showInterests)}>Interests</a></u>
                        </h2>
                        {showInterests && (
                            <table id="list-items">
                                <tbody>
                                    <tr>
                                        <td id="item">3D Printing</td>
                                        <td id="item">The Legend of Zelda</td>
                                        <td id="item">Roller Blading</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Painting</td>
                                        <td id="item">Software Engineering</td>
                                        <td id="item">EDM</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Origami</td>
                                        <td id="item">Biking</td>
                                        <td id="item">Anime</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </Spoiler>

                <Spoiler title="Publications" visible={true} noToggle={true}>
                    <table id="publications-list">
                        <tbody>
                            <tr id="publications-item">
                                <td>
                                    Ziegler, R., & Addo-Quaye, C. (2023). Analysis of Natural Variation in 30 Sorghum Landraces. <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* &nbsp; is a non-breaking space (for pseudo tabs) */}
                                    <a href="https://scholarworks.boisestate.edu/icur/2023/poster_session/86/">
                                        https://scholarworks.boisestate.edu/icur/2023/poster_session/86/
                                    </a> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Spoiler>

                <Spoiler title="What I've Done" visible={true} noToggle={true}>
                    <div className="list-content">
                        <h2 className="list-title">
                            <u><a onClick={() => setShowCourses(!showCourses)}>Relavant Courses</a></u>
                        </h2>
                        {showCourses && (
                            <table id="list-items">
                                <tbody>
                                    <tr>
                                        <td id="item">Data Structures and Algorithms</td>
                                        <td id="item">Computer Architecture</td>
                                        <td id="item">Operating Systems</td>
                                        <td id="item">Capstone Design</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Intelligent Systems/ AI</td>
                                        <td id="item">Computer Networks</td>
                                        <td id="item">Database Systems</td>
                                        <td id="item">Software Engineering</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Game Engine Design</td>
                                        <td id="item">Computer Security</td>
                                        <td id="item">Discrete Mathematics</td>
                                        <td id="item">Calculus I</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </Spoiler>
            </div>
        </React.Fragment>
    )
};

export default About;