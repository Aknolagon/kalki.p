import "../styles/Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="title">
        <h2 className="heading">
          Me Contacter
        </h2>
      </div>
      <div className="contact-container">
        <form action="" className="contact-form">
          <div className="form-name">
            <input
              type="text"
              name="Prénom"
              id=""
              placeholder="Votre Prénom"
              required
            />
            <input
              type="text"
              name="Nom"
              id=""
              placeholder="Votre Nom"
              required
            />
          </div>
          <input
            type="email"
            name="Adresse Email"
            id=""
            placeholder="Votre email"
            required
          />
          <textarea
            type="email"
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Tapez votre message"
            required
          />
          <button type="submit" className="btn">
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
