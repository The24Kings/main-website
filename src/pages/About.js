const About = () => {
    return (
        <div class="container">
            <h1 id="about-header">It's Me!</h1>
            <p>My name is <u>Riley</u> and I'm a software developer from Washington.</p>
            <p id="skills">My skills include:</p>
            <ul id="skills-content">
                <li id="skills-item">C++</li>
                <li id="skills-item">Java</li>
                <li id="skills-item">Python</li>
                <li id="skills-item">MySQL</li>
                <li id="skills-item">Bash</li>
                <li id="skills-item">Git</li>
            </ul>
            <p id="about-content">
                I am a studying in Computer Science, a cronic cat dad and my pronouns are <u>he/him</u>.<br/>
                Some of my current interests include:</p>
            <ul id="interest-content">
                <li id="interest-item">3D Printing</li>
                <li id="interest-item">Painting</li>
                <li id="interest-item">The Legend of Zelda</li>
                <li id="interest-item">Programming</li>
                <li id="interest-item">Biking</li>
                <li id="interest-item">Roller Blading</li>
                <li id="interest-item">Electronic Dance Music</li>
                <li id="interest-item">Anime</li>
                <li id="interest-item">Origami</li>
            </ul>
            
            <h2>
                Status Updates
            </h2>

            <p id="about-content">
                I am currently back to developing a Minecraft Adventure Map called <a href="https://github.com/The24Kings/NormalElevator">Normal Elevator</a>! <br/><br/>
                
                Feel free to check out the data pack on Github, if you have any suggestions for floors or features, <br/>
                please feel free to contact me on Discord or via email! <br/> <br/>

                I'm in the process of learning the Rust Programming Language. <br/>
                The borrow checker/ ownership are intriguing aspects, but challenging to comprehend.
            </p>

            <p id="secret">
                If you know me IRL, shut up, no you don't.
            </p>

            <div class="footer">
                <p>Thanks for visiting!</p>
            </div>
        </div>
    )
};

export default About;