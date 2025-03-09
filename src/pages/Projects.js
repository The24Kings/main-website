import React, { useEffect } from "react";
import { motion } from "framer-motion"
import { Converter } from "showdown";

import { useProjectContent, useStatusContent } from "../utilities/Fetch";
import Spoiler from "../utilities/Spoiler";
import transition from "../utilities/Animation";

const Projects = () => {
    const { projectContent, projectLoading } = useProjectContent();
    const { statusContent, statusLoading } = useStatusContent();

    const converter = new Converter();
    
    // Settings
    converter.setFlavor("github");
    converter.setOption("openLinksInNewWindow", true);
    converter.setOption("moreStyling", true);
    converter.setOption("customizedHeaderId", true);

    const projectHTML = converter.makeHtml(projectContent);
    const statusHTML = converter.makeHtml(statusContent);

    useEffect(() => {
        document.title = "Projects - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <motion.main
                className="container"
                variants={transition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <h1 id="projects-header">What am I up to?!</h1>

                <Spoiler title="Projects">
                    {!projectLoading ? (<div id="md-content" dangerouslySetInnerHTML={{ __html: projectHTML }} />) : (<div><h1>Loading...</h1></div>)}
                </Spoiler>

                <Spoiler title="Status Updates" visible={true}>
                    {!statusLoading ? (<div id="md-content" dangerouslySetInnerHTML={{ __html: statusHTML }} />) : (<div><h1>Loading...</h1></div>)}
                </Spoiler>
            </motion.main>
        </React.Fragment>
    )
};

export default Projects;