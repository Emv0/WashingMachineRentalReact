import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ConsModal = ({ lgShow, closeModal, flag }) => {
    const URI = "http://localhost:8000/";
    const [formData, setFormData] = useState({
        name: '',
        document: '',
        password: '',
        email: ''
    });
    
    const change = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const submit = (e) => {
        if (formData.name === "" || formData.document === "" || formData.password === "" || formData.email === "") {
            e.preventDefault();
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error",
                showConfirmButton: false,
                text: 'Todos los campos deben estar completos',
                timer: 1500
            });
        } else {
            e.preventDefault();
            axios.post(`${URI}userCreate`, formData)
                .then(
                    console.log("informacion enviada")
                )
                .catch(err => {
                    console.log("error enviando", err, formData)
                })
                window.location.reload();
        }
    }
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={closeModal}
                flag={flag}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{ fontSize: 13 }}>
                    <Modal.Title style={{ fontSize: 20 }} id="example-modal-sizes-title-lg">
                        {flag ? "Registrar usuario" : "Registrarse"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submit} >
                        <div className='row mt-5 wrap'>
                            <div className='col-6'>
                                <label style={{ fontSize: 16 }} className='form-label' htmlFor="name">Nombre</label>
                                <input style={{ fontSize: 16 }} name='name' className="form-control" id='name' type="text" placeholder='Nombre' onChange={change} />
                            </div>
                            <div className='col-6'>
                                <label style={{ fontSize: 16 }} className='form-label' htmlFor="document">Documento</label>
                                <input style={{ fontSize: 16 }} name='document' className="form-control" id='document' type="text" placeholder='Documento' onChange={change} />
                            </div>
                        </div>
                        <div>
                            <div className='row mt-5 mb-5'>
                                <div className='col-6'>
                                    <label style={{ fontSize: 16 }} className='form-label' htmlFor="password">Contraseña</label>
                                    <input style={{ fontSize: 16 }} name='password' className="form-control" id='password' type="password" placeholder='Contraseña' onChange={change} />
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: 16 }} className='form-label' htmlFor="email">Correo electrónico</label>
                                    <input style={{ fontSize: 16 }} name='email' className="form-control" id='email' type="email" placeholder='Correo' onChange={change} />
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>
                            <button type="submit" style={{ fontSize: 16 }} className='btn btn-primary'>Registrarse</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ConsModal;