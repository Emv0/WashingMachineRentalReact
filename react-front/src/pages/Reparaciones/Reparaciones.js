import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Reparaciones.css";

const Reparaciones = () => {
  const refForm = useRef();
  const [enviado, setEnviado] = useState(false); 

  const formSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_ah3y2ov";
    const templateId = "template_5x1g6iq";
    const apikey = "YBf0v69PPZlTXdel0";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        setEnviado(true); 
        setTimeout(() => setEnviado(false), 5000); 
        refForm.current.reset(); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="reparaciones-section">
      <div className="container">
        <h2>Reparación de Lavadoras</h2>

        <p>
          <strong>
            ¡Bienvenido al servicio de reparaciones para tu lavadora!
          </strong>{" "}
          Sabemos lo importante que es mantener tus electrodomésticos en óptimas
          condiciones. Una lavadora en buen estado no solo garantiza la limpieza
          de tu ropa, sino que también prolonga su vida útil y ahorra dinero a
          largo plazo. Confía en nuestros expertos para resolver cualquier
          problema que pueda surgir y disfruta de un funcionamiento eficiente de
          tu lavadora.
        </p>

        <div className="servicios-ofrecidos">
          <h3>Servicios Ofrecidos:</h3>
          <ul>
            <li>
              Diagnóstico y reparación de problemas mecánicos y eléctricos.
            </li>
            <li>
              Reemplazo de partes dañadas (bombas de agua, correas, válvulas,
              etc.).
            </li>
            <li>Mantenimiento preventivo para evitar averías futuras.</li>
            <li>Optimización de rendimiento y eficiencia energética.</li>
          </ul>
        </div>

        <div className="formulario-reparacion">
          <h3>Reserva tu cita</h3>
          <form ref={refForm} action="" method="POST" onSubmit={formSubmit}>
            <fieldset className="field-name">
              <label htmlFor="nombre">Nombre completo:</label>
              <input
                type="text"
                id="nombre"
                name="username"
                required
                className="input"
                placeholder="Ej: Margarito"
              />
            </fieldset>
            <fieldset className="field-name">
              <label htmlFor="telefono">Número de teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="tel"
                required
                className="input"
                placeholder="Ej: 3108892465"
              />
            </fieldset>
            <fieldset className="field-name">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input"
                placeholder="Ej: example@example.com"
              />
            </fieldset>
            <fieldset className="field-name">
              <label htmlFor="direccion">Dirección de la reparación:</label>
              <input
                type="text"
                id="direccion"
                name="direction"
                required
                className="input"
                placeholder="Ej: Carrera 42 #48-20 Edificio Cesde, Medellín, Antioquia"
              />
            </fieldset>
            <fieldset className="field-name">
              <label htmlFor="marca_modelo">
                Marca y modelo de la lavadora:
              </label>
              <input
                type="text"
                id="marca_modelo"
                name="model"
                required
                className="input"
                placeholder="Ej: Samsung"
              />
            </fieldset>
            <fieldset className="field-name">
              <label htmlFor="descripcion_problema">
                Descripción del problema:
              </label>
              <textarea
                id="descripcion_problema"
                name="problem"
                rows="4"
                required
                className="input"
                placeholder="Ej: Esta sonado muy duro"
              ></textarea>
            </fieldset>

            <button>Enviar solicitud</button>
          </form>
          {enviado && (
            <div className="mensaje-exito">
              <p>Envío exitoso. Nuestro equipo se contactará contigo pronto.</p>
            </div>
          )}
        </div>

        <div className="numero-soporte">
          <p>
            Para soporte inmediato, llámanos al <strong> +1 234 567 890</strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reparaciones;