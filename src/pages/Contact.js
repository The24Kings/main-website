import React, { useEffect } from 'react';
import { motion } from "framer-motion";

import transition from '../utilities/Animation';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <motion.div 
                className="container" 
                variants={transition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <h1 id="contact-header">Contact Me!</h1>
                <p id="contact-content">Feel free to contact me at 🡆 <a id="link" href="https://gmail.com">business@24kingsunite.net</a></p>
            </motion.div>
        </React.Fragment>
    )
};

export default Contact;