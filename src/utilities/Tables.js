import React, { useState } from 'react';
import Popup from './Popup';
import { useCoursesData } from './Fetch';

const SkillsTable = () => {
    const [showSkills, setShowSkills] = useState(false);

    const skills = ["Python", "C++", "C", "Rust", "Java", "MySQL", "Bash", "Git", "TCP/ UDP", "Linux/ Unix", "HTML", "CSS", "JavaScript", "React", "Node.js"];

    return (
        <section className="list-content">
            <h2 className="list-title">
                {showSkills ? "⮟" : "⮞"} <u onClick={() => setShowSkills(!showSkills)}>Skills</u>
            </h2>
            {showSkills && (
                <div id="list-items">
                    {skills.map((skill, index) => (
                        <div key={index} id="item">{skill}</div>
                    ))}
                </div>
            )}
        </section>
    )
}

const InterestsTable = () => {
    const [showInterests, setShowInterests] = useState(false);

    const interests = ["3D Printing", "The Legend of Zelda", "Roller Blading", "Painting", "Software Engineering", "EDM", "Origami", "Biking", "Anime", "Modding", "Gaming"];

    return (
        <section className="list-content">
            <h2 className="list-title">
                {showInterests ? "⮟" : "⮞"} <u onClick={() => setShowInterests(!showInterests)}>Interests</u>
            </h2>
            {showInterests && (
                <div id="list-items">
                    {interests.map((interest, index) => (
                        <div key={index} id="item">{interest}</div>
                    ))}
                </div>
            )}
        </section>
    )
}

const CoursesTable = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const { coursesData } = useCoursesData();

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
                <div id="list-items">
                    {Object.keys(coursesData).map((course, index) => (
                        <div id="item" key={index}>
                            <u onClick={() => displayPopup(course, coursesData[course].description)}>{course}</u>
                        </div>
                    ))}
                </div>
            )}

            <Popup title={popupTitle} visible={showPopup} onClose={() => closePopup()}>
                {popupContent}
            </Popup>
        </section>
    )
}

export { SkillsTable, InterestsTable, CoursesTable };