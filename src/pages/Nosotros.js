const Nosotros = () => {
    return (
        <div className="mainContent">
            <div className="contentWrapper">
                <article className="article">
                    <div className="containerArticleImage">
                        <img className="articleImage" src="https://irp-cdn.multiscreensite.com/544a686c/MOBILE/jpg/766.jpg" alt="Lavadoras divertidas" />
                    </div>
                    <div className="articleText">
                        <h3 className="articleTitle">SOBRE NOSOTROS</h3>
                        <p className="articleP">
                            Adquiere nuestros servicios de la forma más ágil, si no logras
                            comunicarte con nosotros, no te preocupes!, déjanos tus datos nosotros
                            te llamamos.
                        </p>
                    </div>
                </article>

                <form className="asideContent">
                    <h4>Registro</h4>
                    <label htmlFor="username">Nombre:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="contacto">Número de contacto:</label>
                    <input type="text" id="contacto" name="contacto" />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Registrarse</button>
                </form>
            </div>

            <div className="divSection">
                <section className="sectionContent">
                    <h3 className="sectionTitle">
                        ¿Por qué deberías utilizar nuestros servicios?
                    </h3>
                    <p className="sectionP">
                        Bienvenidos a Lavaexpress, tu solución integral para alquiler y
                        reparación de lavadoras en Medellín. Con años de experiencia en el
                        campo, nos comprometemos a brindarte un servicio confiable y
                        eficiente. Ya sea que necesites una reparación rápida o una lavadora
                        temporal, estamos aquí para ayudarte. Nos enorgullece ofrecer un
                        servicio personalizado y atención al cliente excepcional. Nuestro
                        equipo está dedicado a garantizar tu satisfacción en cada paso del
                        proceso. Desde la primera llamada hasta la entrega del servicio,
                        puedes esperar profesionalismo y calidad en cada interacción. Confía
                        en nosotros para cuidar de tus necesidades de lavandería de manera
                        rápida y eficiente. ¡Gracias por elegirnos!
                    </p>
                </section>
            </div>
        </div>
    );
};
export default Nosotros;