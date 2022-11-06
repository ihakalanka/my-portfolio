import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineEmail } from 'react-icons/md';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:8080/api/send-message`, {
        name,
        email,
        message,
      })
      .then(() => {
        toast.success("Thanks, I'll reply ASAP :)", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
      })
      .catch(() => {
        toast.error("Something Wrong", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const validation = (e) => {
    const emailVAlidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailVAlidation.test(email)) {
      setIsError("Enter Correct Email Address");
    } else {
      setIsError("");
    }
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <>
        <ToastContainer />
      </>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>akalankaih19@gmail.com</h5>
            <a href="mailto:akalankaih19@gmail.com">Send a message</a>
          </article>
        </div>
        <form>
          <input
            type="text"
            placeholder="Your Full Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              validation(e);
            }}
          />
          <textarea
            placeholder="Your message"
            rows="7"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary"
          onClick={submit}
          disabled={!name || !email || !message || isError}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
