import React, { useEffect } from "react";
import MarkdownContent from "react-markdown";

import { useProjectContent, useStatusContent } from "../utilities/Fetch";
import Spoiler from "../utilities/Spoiler";

const Projects = () => {
    const { projectContent } = useProjectContent();
    const { statusContent } = useStatusContent();

    useEffect(() => {
        document.title = "Projects - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="projects-header">What am I up to?!</h1>

                    <Spoiler title="Projects">
                        <div id="md-content">
                            <MarkdownContent>{projectContent}</MarkdownContent>
                        </div>
                    </Spoiler>

                    <Spoiler title="Status Updates" visible={true}>
                        <div id="md-content">
                            <MarkdownContent>{statusContent}</MarkdownContent>
                        </div>
                    </Spoiler>
            </div>
        </React.Fragment>
    )
};

export default Projects;