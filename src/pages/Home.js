import React, { useEffect } from "react";
import MarkdownContent from "react-markdown";

import Spoiler from "../utilities/Spoiler";
import { SkillsTable, InterestsTable, CoursesTable } from "../utilities/Tables";
import Section from "../utilities/Section";
import { useProjectContent } from "../utilities/Fetch";

const Home = () => {
    const { projectContent, projectLoading } = useProjectContent();

    useEffect(() => {
        document.title = "Home - Riley Ziegler";
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <h1 id="home-header">Welcome!</h1>

                <Section className="about" title="Information">
                    <SkillsTable/>
                    <InterestsTable/>
                    <CoursesTable/>

                    <input className="button" type="button" value="Résumé" onClick={() => window.open("https://isoptera.lcsc.edu/~rjziegler/pictures/Resume.pdf")}/>
                </Section>

                <Section title="Publications">
                    <table id="publications-list">
                        <tbody>
                            <tr id="publications-item">
                                <td>
                                    Ziegler, R., & Addo-Quaye, C. (2023). Analysis of Natural Variation in 30 Sorghum Landraces. <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://scholarworks.boisestate.edu/icur/2023/poster_session/86/">
                                        https://scholarworks.boisestate.edu/icur/2023/poster_session/86/
                                    </a> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                <Section title="Projects">
                    {projectLoading && <div>Loading...</div>}
                    {!projectLoading && (
                        <div id="md-content">
                            <MarkdownContent>{projectContent}</MarkdownContent>
                        </div>
                    )}
                </Section>

                <Spoiler title="You found me!">
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