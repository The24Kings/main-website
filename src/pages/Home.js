import React, { useEffect } from "react";

import Spoiler from "../utils";

const Home = () => {
    useEffect(() => {
        document.title = "Home - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="home-header">Welcome!</h1>

                <div className="about">
                    <h2 id="about-header">⮟ Information</h2>
                    <input className="button" type="button" value="Résumé" onClick={() => window.open("https://isoptera.lcsc.edu/~rjziegler/pictures/Resume.pdf")}/>
                </div>

                <Spoiler title=" Here are some pictures of my cat Bandit">
                    <div className="gallery">
                        <div className="picture-content">
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/shelf.JPG" alt="Cat on a shelf"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/concrete.gif" alt="F*ck yeah, concrete!"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/0.5_sunlight.JPG" alt="Basking in the lime light"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/teef.gif" alt="Little Fangs :3"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/blanket.JPG" alt="Captured"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/hat.jpg" alt="is the hat made of hair, or is he made of hat, he screams for he does not know."/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/chair.JPG" alt="Cat in da gaming chair"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/boy.jpg" alt="The boy"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/loaf.jpg" alt="The perfectly cooked loaf of bread"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/towel.jpg" alt="He sits"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/rocker.jpg" alt="Chilling like grandma in the 1900s"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/log.jpg" alt="Pretty boy sitting on a log"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/bush.jpg" alt="He hides"/>
                            <img id="cat" src="https://isoptera.lcsc.edu/~rjziegler/pictures/cat/leaf.jpg" alt="He is trying to blend into nature"/>
                        </div>
                        <div id="scroll"></div>
                    </div> 
                </Spoiler>
            </div>  
        </React.Fragment>  
    )
};

export default Home;