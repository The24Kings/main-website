import { MarkdownBlock, MarkdownSpan, MarkdownElement } from "md-block";

/* BROKEN
    <div>
        <md-block src="https://isoptera.lcsc.edu/~rjziegler/data/status.txt"/>
    </div>
 */

const About = () => {
    return (
        <div className="container">
            <h1 id="about-header">Hello!</h1>

            <p id="about-content">
                My name is <u>Riley</u>, my pronouns are <u>he/him</u>, and I'm a software developer from Washington. <br/> <br/>
                Currently I am studying Computer Science at [REDACTED] and I am a chronic cat dad.
            </p>

            <div className="skills-content">
                <p id="skills-title">
                    <u>Skills</u>
                </p>
                <ul id="skills-list">
                    <li id="skills-item">C++</li>
                    <li id="skills-item">Java</li>
                    <li id="skills-item">Python</li>
                    <li id="skills-item">MySQL</li>
                    <li id="skills-item">Bash</li>
                    <li id="skills-item">Git</li>
                    <li id="skills-item">HTML</li>
                    <li id="skills-item">Linux/ Unix Systems</li>
                    <li id="skills-item">Operations Management</li>
                </ul>
            </div>

            <div className="interest-content">
                <p className="interest-title">
                    <u>Interests</u>
                </p>
                
                <ul id="interest-list">
                    <li id="interest-item">3D Printing</li>
                    <li id="interest-item">Painting</li>
                    <li id="interest-item">Origami</li>
                    <li id="interest-item">The Legend of Zelda</li>
                    <li id="interest-item">Software Engineering</li>
                    <li id="interest-item">Biking</li>
                    <li id="interest-item">Roller Blading</li>
                    <li id="interest-item">EDM</li>
                    <li id="interest-item">Anime</li>
                </ul>
            </div>

            <ul className="status-content">
                <h1>
                    <u>Status Updates</u>
                </h1>

                <li>
                    <strong><u>Nov 2023:</u></strong> <br/> <br/>
                    I am currently back to developing a Minecraft Adventure Map called <a href="https://github.com/The24Kings/NormalElevator">Normal Elevator</a>! <br/><br/>
                    
                    Feel free to check out the data pack on Github, if you have any suggestions for floors or features, <br/>
                    please feel free to contact me on Discord or via email! <br/> <br/>
                </li>
                <li>
                    <strong><u>Dec 2023:</u></strong> <br/> <br/>
                    I'm in the process of learning the Rust Programming Language. <br/>
                    The borrow checker/ ownership are intriguing aspects, but challenging to comprehend. <br/> <br/>
                </li>
            </ul>

            <p id="secret">
                If you know me IRL, shut up, no you don't.
            </p>
        </div>
    )
};

export default About;