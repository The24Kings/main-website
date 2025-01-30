import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

{/* TODO: Import file from remote server of blog post and display it here */}

const Blog = () => {
    const [projectContent, setProjectContent] = useState("");
    const [statusContent, setStatusContent] = useState("");
    const [projectSpoiler, setProjectSpoiler] = useState(false);
    const [statusSpoiler, setStatusSpoiler] = useState(false);

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
        document.title = "Blog - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="blog-header">What am I up to?!</h1>

                <div id="blog-content">
                    <h2 id="spoiler">{projectSpoiler ? "⮟" : "⮞"} Projects</h2>
                    <MarkdownContent content={projectContent} visible={projectSpoiler}/>
                    <div className="toggle">
                        <input className="button" type="button" value={projectSpoiler ? "Hide" : "Spoiler!"} onClick={() => setProjectSpoiler(!projectSpoiler)}/>
                    </div>

                    <h2 id="spoiler">{statusSpoiler ? "⮟" : "⮞"} Status Updates</h2>
                    <MarkdownContent content={statusContent} visible={statusSpoiler}/>
                    <div className="toggle">
                        <input className="button" type="button" value={statusSpoiler ? "Hide" : "Spoiler!"} onClick={() => setStatusSpoiler(!statusSpoiler)}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

const MarkdownContent = ({content, visible}) => {
    return visible ? (
        <div id="content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    ) : null;
};

export default Blog;