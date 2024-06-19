import axios from 'axios';
import { useEffect, useState } from 'react';
import { ModalFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalReserva({ lgShowConsult, closeModalConsult, objlavadoras }) {

  const urlBack = "http://localhost:8000/";

  const { id, cantidad, capacidad, precioPorHora, descripcion, url } = objlavadoras;
  const [valor, setValor] = useState(0);
  const [valorSeleccionado, setValorSeleccionado] = useState(0)
  const [userMachine, setUserMachine] = useState({
    user_id: 0,
    machine_id: 0,
    precio: 0,
    tiempo: 0
  })

  const opcionValue = (e) => {
    const selectedValue = parseFloat(e.target.value);
    setValorSeleccionado(selectedValue)
    setValor(selectedValue * precioPorHora);
  };

  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    setUserMachine(prevState => ({
      ...prevState,
      user_id: user.id,
      machine_id: id,
      precio: valor,
      tiempo: valorSeleccionado
    }))
  }
    , [user.id, id, valor, valorSeleccionado])

  const update = async () => {


    try {
      await axios.post(`${urlBack}userMachineCreate`, userMachine);
      console.log("Reserva finalizada")
    } catch {
      console.log("Error reservando")
    }
    if (cantidad === 0) {
      alert("Lavadora no disponible")
    } else {
      const newQuantity = cantidad - 1;
      try {
        const response = await axios.put(`${urlBack}machineUpdate/${id}`, {
          cantidad: newQuantity
        });
        console.log("Lavadora reservada con exito", response.data)
        window.location.reload();
      } catch (error) {
        console.log("error: ", error)
      }
    }
  }

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
          <Button onClick={update}>Confirmar reserva</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalReserva;