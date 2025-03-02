import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.8 } }} initial={{ opacity: 0 }}>
                <div className="container">
                    <h1 id="contact-header">Contact Me!</h1>
                    <p id="contact-content">Feel free to contact me at 🡆 <a id="link" href="https://gmail.com">business@24kingsunite.net</a></p>
                </div>
            </motion.div>
        </React.Fragment>
    )
};

export default Contact;