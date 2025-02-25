import React, { useState } from 'react';
import Popup from './Popup';

const SkillsTable = () => {
    const [showSkills, setShowSkills] = useState(false);

    return (
        <section className="list-content">
            <h2 className="list-title">
                {showSkills ? "⮟" : "⮞"} <u onClick={() => setShowSkills(!showSkills)}>Skills</u>
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
        </section>
    )
}

const InterestsTable = () => {
    const [showInterests, setShowInterests] = useState(false);

    return (
        <section className="list-content">
            <h2 className="list-title">
                {showInterests ? "⮟" : "⮞"} <u onClick={() => setShowInterests(!showInterests)}>Interests</u>
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
        </section>
    )
}

const CoursesTable = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [popupTitle, setPopupTitle] = useState("");
    const [popupContent, setPopupContent] = useState("");

    const displayPopup = (title, content) => {
        setPopupTitle(title);
        setPopupContent(content);
        setShowPopup(true);
    }

    const closePopup = () => {
        setPopupTitle("");
        setPopupContent("");
        setShowPopup(false);
    }

    return (
        <section className="list-content">
            <h2 className="list-title">
                {showCourses ? "⮟" : "⮞"} <u onClick={() => {setShowCourses(!showCourses)}}>Relevant Courses</u>
            </h2>
            {showCourses && (
                <table id="list-items">
                    <tbody>
                        <tr>
                            <td 
                                id="item" 
                                onClick={() => { 
                                   displayPopup(
                                        "Data Structures and Algorithms", 
                                        "This course covers the design and implementation of data structures and algorithms.\
                                         Topics include: arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, \
                                         and algorithm analysis."
                                    );
                                }}
                            >
                                <u>Data Structures and Algorithms</u>
                            </td>
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
                            <td id="item">Networking I</td>
                            <td id="item">Cybersecurity I</td>
                            <td id="item">Networking II</td>
                            <td id="item">Cybersecurity II</td>
                        </tr>
                    </tbody>
                </table>
            )}

            <Popup title={popupTitle} visible={showPopup} onClose={() => closePopup()}>
                {popupContent}
            </Popup>
        </section>
    )
}

export { SkillsTable, InterestsTable, CoursesTable };