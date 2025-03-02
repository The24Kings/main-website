import React, { useEffect } from "react";
import { motion } from "framer-motion"

import { CoursesTable, InterestsTable, SkillsTable } from "../utilities/Tables";
import Section from "../utilities/Section";

const About = () => {
    useEffect(() => {
        document.title = "About - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <motion.div className="container" exit={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.8 } }} initial={{ opacity: 0 }}>
                <h1 id="about-header">About me!</h1>

                <Section title="Information">
                    <CoursesTable/>
                    <SkillsTable/>
                    <InterestsTable/>
                </Section>

                <Section title="Publications">
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
                </Section>
            </motion.div>
        </React.Fragment>
    )
};

export default About;