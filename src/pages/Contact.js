import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <h1 id="contact-header">Contact Me!</h1>
            <p id="contact-content">Feel free to contact me at 🡆 <a id="link" href="https://gmail.com">business@24kingsunite.net</a></p>
        </React.Fragment>
    )
};

export default Contact;