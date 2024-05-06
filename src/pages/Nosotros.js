
import React from "react";
import "../assets/style.css"
import Nosotros from './pages/Nosotros';
const Nosotros = () => {
  return(
        
        
        <div class="mainContent">
            <article class="article">
                <picture class="containerArticleImage">
                    <img class="articleImage" src="https://img.freepik.com/vector-premium/coleccion-divertida-lavadoras-estilo-simple-doodle_292879-489.jpg"> </img>
                    </picture>
                <div class="articleText">
                    <h3 class="articleTitle">SOBRE NOSOTROS</h3>
                    <p class="articleP">
                        Adquiere nuestros servicios de la forma más ágil, si no logras comunicarte con nosotros, no te preocupes!, dejanos tus datos nosotros te llamamos
                    </p>
                </div> 
            </article>
            <div class="divSection">
                <section class="sectionContent">
                    <h3 class="sectionTitle">¿Por qué deberías utilizar nuestros servicios?</h3>
                    <p class="sectionP">


                        Bienvenidos a Lavaexpress, tu solución integral para alquiler y reparación de lavadoras en Medellín. Con años de experiencia en el campo, nos comprometemos a brindarte un servicio confiable y eficiente.
                        Ya sea que necesites una reparación rápida o una lavadora temporal, estamos aquí para ayudarte.
                        Nos enorgullece ofrecer un servicio personalizado y atención al cliente excepcional.
                        Nuestro equipo está dedicado a garantizar tu satisfacción en cada paso del proceso. Desde la primera llamada hasta la entrega del servicio, puedes esperar profesionalismo y calidad en cada interacción.
                        Confía en nosotros para cuidar de tus necesidades de lavandería de manera rápida y eficiente.
                        somos los mejores aliados para mantener tu ropa limpia y fresca. ¡Gracias por elegirnos!</p>
                </section> </div>

                <form class="asideContent">
                    <h4>Registro</h4>
                    <label for="username">Nombre:</label>
                    <input type="text" id="username" name="username"></input>
                        <label for="contacto">Numero de contacto:</label>
                        <input type="text" id="contacto" name="contacto"></input>
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password"></input>
                                <button type="submit">Registrarse</button>
                            </form> 
                        
                        </div>
                        
                        )}
                        export default Nosotros;
                        
                

                       
    