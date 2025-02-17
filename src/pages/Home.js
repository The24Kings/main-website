import React, { useEffect, useState } from "react";
import MarkdownContent from "react-markdown";

import Spoiler from "../utilities/Spoiler";

const Home = () => {
    const [projectContent, setProjectContent] = useState("");
    const [showSkills, setShowSkills] = useState(false);
    const [showInterests, setShowInterests] = useState(false);
    const [showCourses, setShowCourses] = useState(false);

    // Fetch the blog post from the server
    useEffect(() => {
        fetch("https://isoptera.lcsc.edu/~rjziegler/content/projects.md", { mode: "cors" })
        .then(response => response.text())
        .then(data => { setProjectContent(data); })
        .catch(e => { setProjectContent("Error fetching blog post..."); });
    }, [projectContent]);

    useEffect(() => {
        document.title = "Home - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="home-header">Welcome!</h1>

                <div className="about">
                    <h2 id="about-header">⮟ Information</h2>

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

                    <div className="list-content">
                        <h2 className="list-title">
                            <u><a onClick={() => setShowCourses(!showCourses)}>Relavant Courses</a></u>
                        </h2>
                        {showCourses && (
                            <table id="list-items">
                                <tbody>
                                <tr>
                                        <td id="item">Data Structures and Algorithms</td>
                                        <td id="item">Capstone Design</td>
                                        <td id="item">Computer Architecture</td>
                                        <td id="item">Operating Systems</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Intelligent Systems/ AI</td>
                                        <td id="item">Database Systems</td>
                                        <td id="item">Software Engineering</td>
                                        <td id="item">Computer Networks</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Computer Security</td>
                                        <td id="item">Game Engine Design</td>
                                        <td id="item">Discrete Mathematics</td>
                                        <td id="item">Calculus I</td>
                                    </tr>
                                    <tr>
                                        <td id="item">Networking 1 & 2</td>
                                        <td id="item">Cybersecurity 1 & 2</td>
                                        <td id="item"></td>
                                        <td id="item"></td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    <input className="button" type="button" value="Résumé" onClick={() => window.open("https://isoptera.lcsc.edu/~rjziegler/pictures/Resume.pdf")}/>
                </div>

                <Spoiler title="Publications" visible={true} noToggle={true}>
                    <table id="publications-list">
                        <tbody>
                            <tr id="publications-item">
                                <td>
                                    Ziegler, R., & Addo-Quaye, C. (2023). Analysis of Natural Variation in 30 Sorghum Landraces. <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://scholarworks.boisestate.edu/icur/2023/poster_session/86/">
                                        https://scholarworks.boisestate.edu/icur/2023/poster_session/86/
                                    </a> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Spoiler>

                <Spoiler title="Projects" visible={true} noToggle={true}>
                    <div id="md-content">
                        <MarkdownContent>{projectContent}</MarkdownContent>
                    </div>
                </Spoiler>

                <Spoiler title="You found me!">
                    <div className="gallery">
                        <div className="picture-content">
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/shelf.JPG" alt="Cat on a shelf"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/concrete.gif" alt="F*ck yeah, concrete!"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/0.5_sunlight.JPG" alt="Basking in the lime light"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/teef.gif" alt="Little Fangs :3"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/blanket.JPG" alt="Captured"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/hat.jpg" alt="is the hat made of hair, or is he made of hat, he screams for he does not know."/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/chair.JPG" alt="Cat in da gaming chair"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/boy.jpg" alt="The boy"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/loaf.jpg" alt="The perfectly cooked loaf of bread"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/towel.jpg" alt="He sits"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/rocker.jpg" alt="Chilling like grandma in the 1900s"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/log.jpg" alt="Pretty boy sitting on a log"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/bush.jpg" alt="He hides"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/leaf.jpg" alt="He is trying to blend into nature"/>
                        </div>
                        <div id="scroll"></div>
                    </div> 
                </Spoiler>
            </div>  
        </React.Fragment>  
    )
};

export default Home;