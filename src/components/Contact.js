// Contact.js
import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file
import { Element } from 'react-scroll';
import Navbar from "./Navbar";

const Contact = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Optional smooth scrolling animation
        });
    };

   
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message");
    }
  };

  return (
    <Element name="contacts">
    {/* <Navbar/> */}

    <div className="contact-container">
      <h2 className="contact-header">CONTACT</h2>
      <p className="contact-subheader">
        Have a question or want to work together?
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">SUBMIT</button>
      </form>

      <div className="social-icons">
        <a href="/#" className="icon linkedin">
          in
        </a>
        <a href="/#" className="icon facebook">
          f
        </a>
        <a href="/#" className="icon instagram">
          IG
        </a>
        <a href="/#" className="icon email">
          @
        </a>
      </div>
      <button id="topBtn" className="top-button" onClick={scrollToTop}>
        ^
      </button>
    </div>
    </Element>
  );
};

export default Contact;
