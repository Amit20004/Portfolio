import React from "react";
import "./About.css";
import { Element } from 'react-scroll';
import pic from "../assets/mypic.jpg";

function About() {
    return (
        <Element name="about">
        
        <div className="abt-main">
        <div className="container ">
            <p className="abt">ABOUT</p>
        </div>
        <div className="container mt-5 myabout">
            <div className="row justify-content-center align-items-start text-center">
                <div className="col-md-6 col-12 mb-4">
                    <div className="circle-shape">
                        <img src={pic} alt="Person and dog" className="img-fluid" />
                    </div>
                    <h2>Who's this guy?</h2>
                    <p>I'm a Full Stack Web Developer</p>
                    <p>
                        I'm a B.tech. Student from IPU, GTBIT 
                    </p>
                </div>
                <div className="col-md-6 col-12">
                    <div className="skill-container">
                        <div className="skill-label">CSS</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar css"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-label">HTML</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar html"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-label">React</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar react"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-label">JavaScript</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar js"></div>
                        </div>
                    </div>
                   
                    <div className="skill-container">
                        <div className="skill-label">Node.js</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar node"></div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-label">MongoDb</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar mongo"></div>
                        </div>
                    </div>
                    
                    
                    <div className="skill-container">
                        <div className="skill-label">Figma</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar figma"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-label">Wordpress</div>
                        <div className="skill-bar w-100">
                            <div className="skill-bar wordpress"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div></Element>

            );
}


            export default About;
