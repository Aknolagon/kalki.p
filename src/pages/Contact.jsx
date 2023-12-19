import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.scss";

// const {
//   REACT_APP_YOUR_SERVICE_ID,
//   REACT_APP_YOUR_TEMPLATE_ID,
//   REACT_APP_YOUR_PUBLIC_KEY,
// } = process.env;

function Contact() {
  const form = useRef();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    alert("Message envoyé");
    event.preventDefault(); // 👈️ prevent page refresh
    emailjs.sendForm(
      "service_hursc5o",
      "template_63cnaa8",
       form.current,
      "fxeACTeSH1AMoIHkw"
      //  import.meta.env.REACT_APP_YOUR_SERVICE_ID,
      //  import.meta.env.REACT_APP_OUR_TEMPLATE_ID,
      //  form.current,
      //  import.meta.env.REACT_APP_YOUR_PUBLIC_KEY,
    );

    // 👇️ clear all input values in the form
    setLastname("");
    setFirstname("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <div className="title">
        <h2 className="heading">Me Contacter</h2>
      </div>
      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-name">
            <input
              type="text"
              name="user_firstname"
              id=""
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              placeholder="Votre Prénom"
              required
            />
            <input
              type="text"
              name="user_lastname"
              id=""
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              placeholder="Votre Nom"
              required
            />
          </div>
          <input
            type="email"
            name="user_email"
            id=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Votre email"
            required
          />
          <textarea
            type="email"
            name="message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tapez votre message"
            required
          />
          <button type="submit" value="Send" className="btn">
            Envoyez
          </button>
        </form>
      </div>
      <div className="copyright">
        <p>Droits réservés. Ce portfolio a été réalisé par KALKI Prasanna.</p>
      </div>
    </section>
  );
}

export default Contact;
