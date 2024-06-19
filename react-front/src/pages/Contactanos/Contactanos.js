import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contactanos.css";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import { Link } from "react-router-dom";

const Contactanos = () => {
  const refForm = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_78zp8ea";
    const templateId = "template_jqcyvms";
    const apikey = "YBf0v69PPZlTXdel0";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        setSuccessMessage("¡Mensaje enviado con éxito!");
        refForm.current.reset();
        setTimeout(() => setSuccessMessage(""), 5000); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>CONTACTANOS</h2>

        <div className="contact-info">
          <div className="map">
            <h3>Sede Principal</h3>
            <iframe
              title="Ubicación de nuestra sede"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.142880792869!2d-75.56514139004487!3d6.2448942263134315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442859d833cfa3%3A0xa3fca5c91547777f!2sCesde%20-%20Centro%20de%20Estudios%20Especializados!5e0!3m2!1ses-419!2sco!4v1718702823862!5m2!1ses-419!2sco"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="details">
            <p>
              <strong>Número de teléfono:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Correo electrónico:</strong> contacto@example.com
            </p>
            <p>
              <strong>Horarios de atención:</strong> Lunes a Viernes, 9:00 AM -
              6:00 PM
            </p>
            <p>
              <strong>Redes Sociales</strong>
            </p>

            <div className="social-media">
              <Link to="/">
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link to="/">
                <img src={twitter} alt="Twitter" />
              </Link>
              <Link to="/">
                <img src={instagram} alt="Instagram" />
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Formulario de Contacto o Sugerencia</h3>
          {successMessage && <p className="success-message">{successMessage}</p>}
          <form ref={refForm} action="" method="POST" onSubmit={formSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="phone">Número de Teléfono</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" required />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
            </fieldset>

            <div className="form-group">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;