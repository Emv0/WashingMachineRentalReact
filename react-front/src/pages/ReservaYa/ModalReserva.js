import { useState } from 'react';
import { ModalFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalReserva({ lgShowConsult, closeModalConsult, objlavadoras }) {
  const { cantidad, capacidad, precioPorHora, descripcion, url } = objlavadoras;

  const[valor, setValor]=useState(null);

  const opcionValue = (e) => {
    const valorSeleccionado = parseFloat(e.target.value);
    setValor(valorSeleccionado * precioPorHora);
  };
  return (
    <>
      <Modal
        size="xl"
        show={lgShowConsult}
        onHide={closeModalConsult}
        aria-labelledby="example-modal-sizes-title-xl"
      >
        <Modal.Header closeButton style={{ fontSize: 13 }}>
          <Modal.Title style={{ fontSize: 20 }} id="example-modal-sizes-title-xl">
            Tu reserva
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {console.log(objlavadoras)}
          <div className="card-body text-center d-flex justify-content-around">
          {<img src={url} className="card-img-top" alt={descripcion} />}
            <div className='d-flex-column'>
              <h5 className="card-title text-center">{descripcion}</h5>
              <p className="card-text">Capacidad: {capacidad}</p>
              <p className="card-text">Cantidad: {cantidad}</p>
              <p className="card-text">Precio por hora: ${precioPorHora}</p>
              <h5 className="card-title text-center mt-5">Total:{valor}</h5>
            </div>
            <div className='col-4 '>
              <select className='form-select ' onChange={opcionValue}>
              <option value="">Horas a reservar...</option>
                <option value={1}>1 hora</option>
                <option value={2}>2 hora</option>
                <option value={3}>3 hora</option>
                <option value={4}>4 hora</option>
                <option value={5}>5 hora</option>
              </select>
            </div>
          </div>

        </Modal.Body>
        <ModalFooter>
          <Button>Confirmar reserva</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalReserva;