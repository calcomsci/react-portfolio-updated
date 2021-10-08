import React from 'react';
import './style.css';
import Resume from './resume/TS Resume 1 Page .docx.pdf';



function About() {
    return (
        <section className="bg-light about-page" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0">Hector Perio is a Full Stack Software Engineer with a focused technical backend programming language in C++. In front end software development: <b>React, JavaScript, HTML, node.js, Inquirer, and CSS.</b> </p>
                        <p className="text-muted mb-0">I also have passion for competitive gaming and e-sports. Many of us in the computer science field were taught to make logic-based games like chess, scrabble, and snakes and ladders. Those made a lasting impression on me.</p>
                        <p className="text-muted mb-0">Currently, I play League of Legends and World of Warcraft when I have the time. In the past, I've played Hearthstone, Chess, and Street Fighter. Sometimes, I will watch the top professionals to keep up with the scenes in these games/titles.</p>
                        <p className="text-muted mb-0">Last, but certainly not least, I like to <b>cycle</b> for commute and leisure to minimize my carbon footprint, and <b>use vehicles free from fossil fuels</b>. <b>I try to make this world a better place than when I found it</b> when I get the chance.</p>    
                            <hr></hr>
                            <div className="col-sm-12">
                            <a href={Resume} target="blank" className="btn btn-outline-dark about-btn" role="button"><i className="fas fa-user-circle"></i> Resume</a>
                            <a href="https://github.com/calcomsci" className="btn btn-dark about-btn btn-outline-light" target="blank" role="button"><i className="fab fa-github"></i> Github</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;