import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie-player";
import mailJson from "../lotties/mail.json";
import { useTheme } from "../context/ThemeContext";
import "../styles/Contact.scss";

function Contact() {
  const { theme } = useTheme();
  const form = useRef();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    alert("Message envoyé");
    event.preventDefault();
    const serviceId = "service_6mgaapt"; 
    const templateId = "template_74l8x3g";
    const publicKey = "c5ZVnBgpfN-AumguN";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setLastname("");
        setFirstname("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="/contact" className={`contact ${theme}`}>
      <div className="title">
        <h2 className="heading">Me Contacter</h2>
      </div>
      <Lottie
      className="lottie"
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
              name="firstname"
              id=""
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              placeholder="Votre Prénom"
              required
            />
            <input
              type="text"
              name="lastname"
              id=""
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              placeholder="Votre Nom"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Votre email"
            required
          />
          <textarea
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
            <span className="btn-txt">Envoyez</span>
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
