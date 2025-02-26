import { useState, useEffect } from 'react';

// Fetch the status updates from the server
export const useProjectContent = () => {
    const [projectContent, setProjectContent] = useState("");

    useEffect(() => {
        fetch("https://isoptera.lcsc.edu/~rjziegler/content/projects.md", { mode: "cors", cache: "no-cache" })
            .then(response => response.text())
            .then(data => { setProjectContent(data); })
            .catch(e => { setProjectContent("Error fetching blog post..."); });
    }, []);

    return { projectContent };
};

// Fetch the blog post from the server
export const useStatusContent = () => {
    const [statusContent, setStatusContent] = useState("");

    useEffect(() => {
        fetch("https://isoptera.lcsc.edu/~rjziegler/content/status.md", { mode: "cors", cache: "no-cache" })
            .then(response => response.text())
            .then(data => { setStatusContent(data); })
            .catch(e => { setStatusContent("Error fetching status post..."); });
    }, []);

    return { statusContent };
};