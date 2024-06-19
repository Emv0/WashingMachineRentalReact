import React, { useEffect } from "react";

import "./Inicio.css";
import Img3slider from "../../assets/img/Slider/Img3slider.jpg";
import Img2slider from "../../assets/img/Slider/Img2slider.jpg";
import Img1slider from "../../assets/img/Slider/Img1slider.jpg";

import promoL from "../../assets/img/Promos/promoL.png";
import promoR from "../../assets/img/Promos/promoR.png";
import { Link } from "react-router-dom";

const Inicio = () => {
  useEffect(() => {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${-i * 100}%)`;
      });
    }

    const autoSlide = setInterval(() => {
      index = index < slides.length - 1 ? index + 1 : 0;
      showSlide(index);
    }, 5000);

    prev.addEventListener("click", () => {
      clearInterval(autoSlide);
      index = index > 0 ? index - 1 : slides.length - 1;
      showSlide(index);
    });

    next.addEventListener("click", () => {
      clearInterval(autoSlide);
      index = index < slides.length - 1 ? index + 1 : 0;
      showSlide(index);
    });

    return () => {
      clearInterval(autoSlide);
      prev.removeEventListener("click", () => {});
      next.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <main>
      <section className="section-slider">
        <div className="slider">
          <div className="slide active">
            <img src={Img3slider} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2slider} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img1slider} alt="Slide 3" />
          </div>
          <div className="slider-nav">
            <button className="prev">❮</button>
            <button className="next">❯</button>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="images-container">
          <img src={promoL} alt="Imagen 1" />
        </div>
        <div className="content-text">
          <h2>¿Por qué arrendar una lavadora con nosotros?</h2>
          <p>
            Arrendar una lavadora con nosotros significa acceso a tecnología
            avanzada sin costos iniciales, contratos flexibles adaptados a sus
            necesidades, servicio al cliente excepcional y contribución a la
            sostenibilidad, todo en una solución económica y conveniente para su
            lavandería.
          </p>
          <button><Link to="/reservaya" className="promo">
              Reserva ya
            </Link></button>
        </div>
      </section>
      <hr className="divider" />

      <section className="section-content">
        <div className="content-text">
          <h2>¿Por qué reparar tu lavadora con nosotros?</h2>
          <p>
            Reparar tu lavadora con nosotros significa acceder a un servicio
            profesional y confiable, con técnicos capacitados que utilizan
            piezas originales para garantizar un funcionamiento óptimo y
            duradero. Ofrecemos presupuestos transparentes, garantía de servicio
            y atención personalizada para resolver rápidamente cualquier
            problema, asegurando que tu lavadora esté siempre lista para
            funcionar sin complicaciones.
          </p>
          <button>
            <Link to="/reparaciones" className="promo">
              Solicita reparación
            </Link>
          </button>
        </div>
        <br className="space" />
        <div className="images-container">
          <img src={promoR} alt="Reparación Imagen 1" />
        </div>
      </section>
    </main>
  );
};

export default Inicio;
