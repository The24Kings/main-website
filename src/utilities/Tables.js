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
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Data Structures and Algorithms", 
                                            "Covers the fundamental data structures used in computer science, such as arrays, stacks, queues, linked lists, trees, and graphs. It explores algorithms for sorting, searching, and optimization, with an emphasis on their efficiency and complexity, and introduces concepts like Big O notation for performance analysis."
                                        );
                                    }}    
                                >
                                    Data Structures and Algorithms
                                </u>
                            </td>
                            <td id="item">
                                <u  
                                    onClick={() => { 
                                        displayPopup(
                                            "Capstone Design", 
                                            "Develop a comprehensive project using scrum that integrates knowledge and skills acquired throughout the degree program. Students work in teams to design, develop, and present a solution to a real-world problem. Our team developed a Personal Finance Manager application using Ionic, React, and Firebase."
                                        );
                                    }}
                                >
                                    Capstone Design
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Computer Architecture", 
                                            "Learn the fundamental concepts of computer architecture, including instruction set design, processor architecture, memory hierarchy, and input/output mechanisms. In this class we programmed in MIPS assembly language and designed simple logic circuits in Logisim."
                                        );
                                    }}
                                >
                                    Computer Architecture
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                    displayPopup(
                                            "Operating Systems", 
                                            "Deep dive into the processes and design of operating systems. Topics include process management, memory management, file systems, and concurrency. We implemented various kernel modules in C for a Linux kernel and developed a simple shell in C."
                                        );
                                    }}
                                >
                                    Operating Systems
                                </u>
                            </td>
                        </tr>
                        <tr>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Intelligent Systems/ AI", 
                                            "This course covers the principles and techniques of artificial intelligence, including machine learning, natural language processing, and robotics. Throughout the course we implemented various AI algorithms in C++ such as A* search, neural networks, and genetic algorithms."
                                        );
                                    }}
                                >
                                    Intelligent Systems/ AI
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Database Systems", 
                                            "This course covers the design and implementation of database systems. Create and query databases using SQL, and design and implement a database using MySQL."
                                        );
                                    }}
                                >
                                    Database Systems
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Software Engineering", 
                                            "This course covers the principles and practices of software engineering. Topics include software development methodologies, project management, and software testing. Throughout the semester we worked in teams to develop a web application using the Scrum methodology. We used Ionic, React, and Firebase to develop Pitch Tracker, a baseball pitch tracking app."
                                        );
                                    }}
                                >
                                    Software Engineering
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Computer Networks", 
                                            "This course covers the different layers and design of computer networks. Topics include network protocols, network architecture, and network security. Course work included the design and implementation of a MMRPG M.U.D. over TCP with both server and client."
                                        );
                                    }}
                                >
                                    Computer Networks
                                </u>
                            </td>
                        </tr>
                        <tr>
                            <td id="item" >
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Computer Security", 
                                            "A comprehensive deep dive into computer security, memory vulnerabilities, and exploits. Topics include cryptography, network security, and security protocols. As well as ethical hacking, with practice exploiting vulnerabilities on exposed systems."
                                        );
                                    }}
                                >
                                    Computer Security
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Game Engine Design", 
                                            "How to design and implement a game engine using c++ and OpenGL. Topics include graphics rendering, physics simulation, and game development tools such as Visual Studio and Blender."
                                        );
                                    }}
                                >
                                    Game Engine Design
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Discrete Mathematics", 
                                            "The fundamental concepts of discrete mathematics. Topics include logic, set theory, combinatorics, graph theory, and algorithms."
                                        );
                                    }}
                                >
                                    Discrete Mathematics
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Calculus I", 
                                            "Fundamental concepts of calculus. Topics include limits, derivatives, integrals, and applications of calculus."
                                        );
                                    }}
                                >
                                    Calculus I
                                </u>
                            </td>
                        </tr>
                        <tr>
                            <td id="item">
                                <u 
                                    onClick={() => { 
                                       displayPopup(
                                            "Cybersecurity I", 
                                            "This course will introduce students to a wide range of modern cybersecurity topics and issues. Students will explore foundational cybersecurity topics necessary to build expertise on both technical and process-oriented skills and learn the concepts and methodologies being used in the field of cybersecurity. Labs are designed to provide an interactive environment for students to simulate real-world scenarios."
                                        );
                                    }}
                                >
                                    Cybersecurity I
                                </u>
                            </td>
                            <td id="item">
                                <u
                                    onClick={() => { 
                                        displayPopup(
                                            "Networking II", 
                                            "Intermediate computer networking standards, best practices, theory, and practical application. In this course students will start to gain the skills required to pass the Cisco CCNA certification exam including TCP/IP network models, ethernet LANs, WANs and IP routing, command-line interfaces, switching management, and spanning tree protocol concepts."
                                        );
                                    }}
                                >
                                    Networking II
                                </u>
                            </td>
                            <td id="item"></td>
                            <td id="item"></td>
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