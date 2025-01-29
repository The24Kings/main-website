import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

{/* TODO: Import file from remote server of blog post and display it here */}

const Blog = () => {
    const [markdownContent, setMarkdownContent] = useState(null);

    // Fetch the blog post from the server
    useEffect(() => {
        fetch("https://isoptera.lcsc.edu/~rjziegler/content/blog.md")
        .then(response => response.text())
        .then(data => { setMarkdownContent(data); })
        .catch(e => { setMarkdownContent("Error fetching blog post..."); });
    }, [markdownContent]);

    useEffect(() => {
        document.title = "Blog - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="blog-header">What am I up to?!</h1>

                <div id="blog-content">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Blog;