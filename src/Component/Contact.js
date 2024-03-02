import React from "react";
import { useEffect, useState } from "react";
import "../Styles/contact.css";

const Contact = () => {
  const [animate, setAnimate] = useState(true);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [notes, setNotes] = useState(false);
  const [count, setCount] = useState(false);

  const onSubmit = (e) => {
    localStorage.setItem("message", messageInput);
    e.preventDefault();
    setEmailInput("");
    setNameInput("");
    setMessageInput("");
    if (nameInput === "notes") {
      setNotes(true);
    }
  };

  const fetch = (e) => {
    e.preventDefault();
    const storedItem = localStorage.getItem("message");
    console.log(storedItem);
    setMessageInput(storedItem);
  };

  useEffect(() => {
    setCount(messageInput.length);
  }, [messageInput]);

  return (
    <>
      <section className="contact">
        <div className="contact-area">
          <h1
            className={
              animate ? "contact-title" : "contact-title contact-title-animate"
            }
          >
            CONTACT
          </h1>
          <div className="contact-title-underline"></div>
        </div>
        <div className="contact-para">
          Have a question or want to work together?
        </div>
        <form className={animate ? "form" : "form form-animate"}>
          <input
            type="text"
            placeholder="Name"
            name="name-input"
            id="name-input"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            type="email"
            name="email-input"
            id="email-input"
            placeholder="Enter email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            name="message-input"
            id="message-holder"
            cols="30"
            rows={notes ? "20" : "10"}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>
          <button
            className="sumbit-btn"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            SUMBIT
          </button>
          {notes ? <p style={{ color: "white" }}>{count}</p> : ""}
          {notes ? <button onClick={(e) => fetch(e)}>fetch</button> : ""}
        </form>
      </section>
    </>
  );
};
export default Contact;
