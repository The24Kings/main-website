import { useState, useEffect } from 'react';

// Fetch the status updates from the server
export const useProjectContent = () => {
    const [projectContent, setProjectContent] = useState("");
    const [projectLoading, setProjectLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setProjectLoading(true);
        setError(null);

        fetch("https://isoptera.lcsc.edu/~rjziegler/content/projects.md", { mode: "cors", cache: "no-cache" })
            .then(response => response.text())
            .then(data => { 
                setProjectContent(data); 
                setProjectLoading(false);
            })
            .catch(e => { 
                setProjectContent("Error fetching blog post..."); 
                setError(e); 
                setProjectLoading(false);
            });
    }, []);

    return { projectContent, projectLoading, error };
};

// Fetch the blog post from the server
export const useStatusContent = () => {
    const [statusContent, setStatusContent] = useState("");
    const [statusLoading, setStatusLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatusLoading(true);

        fetch("https://isoptera.lcsc.edu/~rjziegler/content/status.md", { mode: "cors", cache: "no-cache" })
            .then(response => response.text())
            .then(data => { 
                setStatusContent(data); 
                setStatusLoading(false);
            })
            .catch(e => { 
                setStatusContent("Error fetching status post..."); 
                setError(e);
                setStatusLoading(false);
            });
    }, []);

    return { statusContent, statusLoading, error };
};
export const useCoursesData = () => {
    const [coursesData, setCoursesData] = useState({});
    const [coursesLoading, setCoursesLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCoursesLoading(true);

        fetch("https://isoptera.lcsc.edu/~rjziegler/content/courses.json", { mode: "cors", cache: "no-cache" })
            .then(response => response.json())
            .then(data => { 
                setCoursesData(data); 
                setCoursesLoading(false);
            })
            .catch(e => { 
                setCoursesData([]); 
                setError(e);
                setCoursesLoading(false);
            });
    }, []);

    return { coursesData, coursesLoading, error };
}