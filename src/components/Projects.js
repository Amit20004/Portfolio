import React, { useState } from "react";
import "./Projects.css"; // Importing the CSS file
import { Element } from "react-scroll";
// import Navbar from './Navbar';
import tic from "../assets/project1.png";
import sort from "../assets/project2.png";
import crud from "../assets/project3.png";
import login from "../assets/project4.png";
import todo from "../assets/project5.png";
import calc from "../assets/project6.png";
import quote from "../assets/project7.png";
import weather from "../assets/project8.png";
import counter from "../assets/project9.png";

const projects = [
  {
    id: 1,
    title: "Tic-Tac-Toe",
    category: "mern",
    image: tic,
    description: "Interactive two-player Tic-Tac-Toe game",
  },
  {
    id: 2,
    title: "SSFP",
    category: "mern",
    image: sort,
    description: "Dynamic data table with sorting",
  },
  {
    id: 3,
    title: "CRUD Operation",
    category: "mern",
    image: crud,
    description: "Full-stack CRUD application in MERN",
  },
  {
    id: 4,
    title: "Authentication",
    category: "mern",
    image: login,
    description: "Secure user authentication in MERN",
  },
  {
    id: 5,
    title: "ToDo List",
    category: "JavaScript",
    image: todo,
    description: "Task management with intuitive interface",
  },
  {
    id: 6,
    title: "Calculator",
    category: "JavaScript",
    image: calc,
    description: "Simple and efficient arithmetic calculator",
  },
  {
    id: 7,
    title: "Quotes Generator",
    category: "JavaScript",
    image: quote,
    description: "Random inspirational quote generator tool",
  },
  {
    id: 8,
    title: "Stop Watch",
    category: "JavaScript",
    image: counter,
    description: "User-friendly digital stopwatch application",
  },
  {
    id: 9,
    title: "Weather Report",
    category: "JavaScript",
    image: weather,
    description: "Real-time weather information display application",
  },

  // Add more projects as needed
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Element name="project">
      {/* <Navbar/> */}

      <div className="project-main">
        <div className="project-container">
          <h2 className="project-header">PROJECTS</h2>
          {/* Filter Menu */}
          <div className="filter-menu">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => handleFilterClick("All")}
            >
              All
            </button>
            <button
              className={selectedCategory === "mern" ? "active" : ""}
              onClick={() => handleFilterClick("mern")}
            >
              MERN
            </button>
            <button
              className={selectedCategory === "JavaScript" ? "active" : ""}
              onClick={() => handleFilterClick("JavaScript")}
            >
              JAVASCRIPT
            </button>
          </div>
          {/* Project Thumbnails */}
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-thumbnail">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Project;
