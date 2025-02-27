import { useState, useEffect } from 'react';

// Fetch the status updates from the server
export const useProjectContent = () => {
    const [projectContent, setProjectContent] = useState("");
    const [projectLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch("https://isoptera.lcsc.edu/~rjziegler/content/projects.md", { mode: "cors", cache: "no-cache" })
            .then(response => response.text())
            .then(data => { setProjectContent(data); })
            .catch(e => { 
                setProjectContent("Error fetching blog post..."); 
                setError(e); 
            });

        setLoading(false);
    }, []);

    return { projectContent, projectLoading, error };
};

// Fetch the blog post from the server
export const useStatusContent = () => {
    const [statusContent, setStatusContent] = useState("");
    const [statusLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch("https://isoptera.lcsc.edu/~rjziegler/content/status.md", { mode: "cors", cache: "no-cache" })
            .then(response => response.text())
            .then(data => { setStatusContent(data); })
            .catch(e => { 
                setStatusContent("Error fetching status post..."); 
                setError(e);
            });

        setLoading(false);
    }, []);

    return { statusContent, statusLoading, error };
};