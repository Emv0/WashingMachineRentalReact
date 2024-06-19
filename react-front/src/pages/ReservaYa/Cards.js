import Swal from "sweetalert2";
import ModalReserva from "./ModalReserva.js";
import {useState} from 'react';

const Cards = ({ lavadoraCard }) => {
  const { cantidad, capacidad, precioPorHora, descripcion, url } = lavadoraCard;

  const [lgShowConsult, setLgShowConsult] = useState(false);

  const mostrarModal = () =>{
    setLgShowConsult(true)
  }

  const ocultarModal = () =>{
    setLgShowConsult(false);
  }

  const token = sessionStorage.getItem('authToken');

  const alerta = () =>{
    Swal.fire({
      title: "Para reservar debes iniciar sesiòn o registrarte",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }


  return (
    <div className="card">
      {<img src={url} className="card-img-top" alt={descripcion} />}
      <div className="card-body">
        <h5 className="card-title text-center">{descripcion}</h5>
        <p className="card-text">Capacidad: {capacidad}</p>
        <p className="card-text">Cantidad: {cantidad}</p>
        <p className="card-text">Precio por hora: ${precioPorHora}</p>
        {token?<button className="btn btn-primary" onClick={mostrarModal} >Reservar
        </button>:<button className="btn btn-primary" onClick={alerta}  >Reservar</button>}
      </div>
      <ModalReserva lgShowConsult={lgShowConsult} closeModalConsult={ocultarModal} objlavadoras={lavadoraCard}/>
    </div>
  );
};

export default Cards;
