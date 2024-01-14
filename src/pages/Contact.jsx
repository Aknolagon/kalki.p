import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import animationData from "../lotties/mail.json";
import { useTheme } from "../context/ThemeContext";
import "../styles/Contact.scss";

function Contact() {
  const { theme } = useTheme();
  const form = useRef();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const serviceId = "service_6mgaapt";
const templateId = "template_74l8x3g";
const publicKey = "c5ZVnBgpfN-AumguN";

  const sendEmail = (event) => {
    alert("Message envoyé");
    event.preventDefault();

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

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section variants={textVariants} initial="initial" animate="animate" id="/contact" className={`contact ${theme}`}>
      <div className="title">
        <h2 className="heading">Me Contacter</h2>
      </div>
      <Player className="lottie" loop src={animationData} autoplay />
      <div className="contact-container">
        <form
          id="form"
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-name">
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              placeholder="Votre Prénom"
              required
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              placeholder="Votre Nom"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            id="mail"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Votre email"
            required
          />
          <textarea
            name="message"
            id="message"
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
    </motion.section>
  );
}

export default Contact;
