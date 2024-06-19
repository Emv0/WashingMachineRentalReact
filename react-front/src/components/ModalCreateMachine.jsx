import axios from 'axios';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function ModalCreateMachine({ modalCreateMachine, closeModalMachine }) {

    const url = "http://localhost:8000/";

    const [dataMachine, setDataMachine] = useState({
        codigo: '',
        cantidad: 0,
        descripcion: '',
        capacidad: '',
        precioPorHora: 0,
        url: ''
    })

    const change = (e) => {
        const {name, value} = e.target;
        setDataMachine(prevSetDataMachine => ({
            ...prevSetDataMachine,
            [name]: value
        }))
    }

    const machineCreate = async () => {

        try {
            if(dataMachine.codigo !== "" && dataMachine.cantidad !== 0 && dataMachine.descripcion !== "" && dataMachine.capacidad !== "" && dataMachine.precioPorHora !== 0 && dataMachine.url !== ""){
                await axios.post(`${url}machineCreate`,dataMachine);
                console.log("Lavadora creada con exito");
                closeModalMachine()
            }else{
                console.log("Todos los campos deben estar llenos")
            }
        } catch (error) {
            console.log("Error: "+error);
        }
    }

    return (
        <>
            <Modal
                size="lg"
                show={modalCreateMachine}
                onHide={closeModalMachine}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{ fontSize: 13 }}>
                    <Modal.Title style={{ fontSize: 20 }} id="example-modal-sizes-title-lg">
                        Registrar Lavadora
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={machineCreate}>
                        <div className='row mb-5'>
                            <div className='col-4'>
                                <label className='form-label text-center' htmlFor="inputCode">Código lavadora</label>
                                <input className='form-control' onChange={change} type="text" name='codigo' id='inputCode' />
                            </div>
                            <div className='col-4'>
                                <label className='form-label text-center' htmlFor="inputQuantity">Cantidad lavadora</label>
                                <input className='form-control' onChange={change} type="number" name='cantidad' id='inputQuantity' />
                            </div>
                            <div className='col-4'>
                                <label className='form-label text-center' htmlFor="inputDescription">Descripción</label>
                                <input className='form-control' onChange={change} type="text" name='descripcion' id='inputDescription' />
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-4'>
                                <label className='form-label text-center' htmlFor="inputCapacity">Capacidad Lavadora</label>
                                <input className='form-control' onChange={change} type="text" name='capacidad' id='inputCapacity' />
                            </div>
                            <div className='col-4'>
                                <label className='form-label text-center' htmlFor="inputPrice">Precio por hora</label>
                                <input className='form-control' onChange={change} type="number" name='precioPorHora' id='inputPrice' />
                            </div>
                            <div className='col-4'>
                                <label className='form-label text-center' htmlFor="inputUrl">Url imagen</label>
                                <input className='form-control' onChange={change} type="text" name='url' id='inputUrl' />
                            </div>
                        </div>
                        <Modal.Footer>
                            <button type="submit" style={{ fontSize: 16 }} className='btn btn-primary'>Registrar</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
