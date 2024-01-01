import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.scss";
import Lottie from "react-lottie-player";
import mailJson from "../lotties/mail.json";

function Contact() {
  const form = useRef();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //  const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
  //  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
  //  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

  const sendEmail = (event) => {
    alert("Message envoyé");
    event.preventDefault();
    emailjs.sendForm(
      // "service_hursc5o",
      // "template_63cnaa8",
      //  form.current,
      // "fxeACTeSH1AMoIHkw",
       import.meta.env.VITE_YOUR_SERVICE_ID,
       import.meta.env.VITE_YOUR_TEMPLATE_ID,
       form.current,
       import.meta.env.VITE_YOUR_PUBLIC_KEY,
    );

    
    setLastname("");
    setFirstname("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="/contact" className="contact">
      <div className="title">
        <h2 className="heading">Me Contacter</h2>
        </div>
      <Lottie
        loop
        animationData={mailJson}
        play
        style={{ width: 1450, height: 250 }}
        />
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
