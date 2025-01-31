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
                <h1 id="blog-header">What am I up to?!</h1>

                <div id="blog-content">
                    <Spoiler title="Projects">
                        <MarkdownContent>{projectContent}</MarkdownContent>
                    </Spoiler>

                    <Spoiler title="Status Updates">
                        <MarkdownContent>{statusContent}</MarkdownContent>
                    </Spoiler>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Projects;