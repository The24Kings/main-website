import React, { useState, useEffect } from "react";


const About = () => {
    const [ visible, setVisible ] = useState(false);
    const [buttonName, setButtonName] = useState("Spoiler!");
    const [arrow, setArrow] = useState("⮞");

    useEffect(() => {
        document.title = "About - Riley Ziegler";
    }, []);

    const onSpoilerClick = () => {
        setVisible(!visible);

        if (visible) {
            setButtonName("Spoiler!");
            setArrow("⮞");
        } else {
            setButtonName("Hide");
            setArrow("⮟");
        }
    }
    
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

                <div className="publications-content">
                    <h2 id="publications-title">{arrow} Publications</h2>

                    <div className="publications-spoiler">
                        <Publications visible={visible}/>

                        <div className="publication-toggle">
                            <input className="button" type="button" value={buttonName} onClick={onSpoilerClick} href="#scroll"/>
                        </div>
                    </div>
                </div>

    {/*}TODO: Change this to pull from a file
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
                    <li>
                        <strong><u>Jan 2024:</u></strong> <br/> <br/>
                        I'm currently developing a <a href="https://github.com/The24Kings/rust-sudoku-solver">Sudoku Solver</a> in Rust. <br/><br/>
                        I have previously attempted to make a <a href="https://github.com/The24Kings/SudokuSolver">Sudoku Solver</a> in Java, but I am I am not happy with the results. <br/>
                        I am hoping to make a more efficient and elegant solution in Rust. <br/> <br/>
                    </li>
                </ul>
    */}
            </div>
        </React.Fragment>
    )
};

const Publications = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
       <ul id="publications-list">
            <li id="publications-item">
                Ziegler, R., & Addo-Quaye, C. (2023). Analysis of Natural Variation in 30 Sorghum Landraces. <br/>
                <a href="https://scholarworks.boisestate.edu/icur/2023/poster_session/86/">https://scholarworks.boisestate.edu/icur/2023/poster_session/86/</a> 
            </li>
        </ul>
    )
};

export default About;