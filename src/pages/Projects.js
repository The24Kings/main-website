import React, { useState, useEffect } from "react";
import MarkdownContent from "react-markdown";

import Spoiler from "../utilities/Spoiler";

const Projects = () => {
    const [projectContent, setProjectContent] = useState("");
    const [statusContent, setStatusContent] = useState("");

    // Fetch the blog post from the server
    useEffect(() => {
        fetch("https://isoptera.lcsc.edu/~rjziegler/content/projects.md", { mode: "cors" })
        .then(response => response.text())
        .then(data => { setProjectContent(data); })
        .catch(e => { setProjectContent("Error fetching blog post..."); });
    }, [projectContent]);

    useEffect(() => {
        fetch("https://isoptera.lcsc.edu/~rjziegler/content/status.md", { mode: "cors" })
        .then(response => response.text())
        .then(data => { setStatusContent(data); })
        .catch(e => { setStatusContent("Error fetching status post..."); });
    }, [statusContent]);

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

                    <Spoiler title="Status Updates">
                        <div id="md-content">
                            <MarkdownContent>{statusContent}</MarkdownContent>
                        </div>
                    </Spoiler>
            </div>
        </React.Fragment>
    )
};

export default Projects;