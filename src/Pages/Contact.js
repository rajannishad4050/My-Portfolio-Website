import React from "react";
import { useEffect, useState } from "react";

const Contact = ({ runContactWheel, thirdScroll }) => {
  const [animate, setAnimate] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    if (thirdScroll) {
      setTimeout(() => {
        setAnimate(true);
      }, 950);
    }
  }, [thirdScroll]);

  return (
    <>
      <section className="contact" onWheel={runContactWheel}>
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
            rows="10"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>
          <button
            className="sumbit-btn"
            onClick={(e) => {
              e.preventDefault();
              setEmailInput("");
              setNameInput("");
              setMessageInput("");
            }}
          >
            SUMBIT
          </button>
        </form>
      </section>
    </>
  );
};
export default Contact;
