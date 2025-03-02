import React, { useEffect } from "react";
import MarkdownContent from "react-markdown";
import { motion } from "framer-motion"

import { useProjectContent, useStatusContent } from "../utilities/Fetch";
import Spoiler from "../utilities/Spoiler";
import transition from "../utilities/Animation";

const Projects = () => {
    const { projectContent, projectLoading } = useProjectContent();
    const { statusContent, statusLoading } = useStatusContent();

    useEffect(() => {
        document.title = "Projects - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <motion.div 
                className="container" 
                variants={transition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <h1 id="projects-header">What am I up to?!</h1>

                <Spoiler title="Projects">
                    <div id="md-content">
                        {!projectLoading ? (<MarkdownContent>{projectContent}</MarkdownContent>) : (<div><h1>Loading...</h1></div>)}
                    </div>
                </Spoiler>

                <Spoiler title="Status Updates" visible={true}>
                    <div id="md-content">
                        {!statusLoading ? (<MarkdownContent>{statusContent}</MarkdownContent>) : (<div><h1>Loading...</h1></div>)}
                    </div>
                </Spoiler>
            </motion.div>
        </React.Fragment>
    )
};

export default Projects;