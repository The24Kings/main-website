import React, { useEffect } from "react";
import MarkdownContent from "react-markdown";

import { useProjectContent, useStatusContent } from "../utilities/Fetch";
import Spoiler from "../utilities/Spoiler";

const Projects = () => {
    const { projectContent, projectLoading } = useProjectContent();
    const { statusContent, statusLoading } = useStatusContent();

    useEffect(() => {
        document.title = "Projects - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="projects-header">What am I up to?!</h1>

                    <Spoiler title="Projects">
                        {projectLoading && <div>Loading...</div>}
                        {!projectLoading && (
                            <div id="md-content">
                                <MarkdownContent>{projectContent}</MarkdownContent>
                            </div>
                        )}
                    </Spoiler>

                    <Spoiler title="Status Updates" visible={true}>
                        {statusLoading && <div>Loading...</div>}
                        {!statusLoading && (
                            <div id="md-content">
                                <MarkdownContent>{statusContent}</MarkdownContent>
                            </div>
                        )}
                    </Spoiler>
            </div>
        </React.Fragment>
    )
};

export default Projects;