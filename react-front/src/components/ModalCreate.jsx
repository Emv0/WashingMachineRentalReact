import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

const ConsModal = ({ lgShow, closeModal }) => {

    const [formData, setFormData] = useState({
        name: '',
        document: '',
        password: '',
        email: ''
    });

    const change = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData =>({
            ...prevFormData,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/userCreate', formData)
            .then(
                console.log("informacion enviada")
            )
            .catch(err => {
                console.log("error enviando", err, formData)
            })
    }
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={closeModal}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{ fontSize: '1.3rem' }}>
                    <Modal.Title style={{ fontSize: '2.0rem' }} id="example-modal-sizes-title-lg">
                        Registrarse
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submit} >
                        <div className='row mt-5 wrap'>
                            <div className='col-6'>
                                <label style={{ fontSize: '1.6rem' }} className='form-label' for="name">Nombre</label>
                                <input style={{ fontSize: '1.6rem' }} name='name' className="form-control" id='name' type="text" placeholder='Nombre' onChange={change} />
                            </div>
                            <div className='col-6'>
                                <label style={{ fontSize: '1.6rem' }} className='form-label' for="document">Documento</label>
                                <input style={{ fontSize: '1.6rem' }} name='document' className="form-control" id='document' type="text" placeholder='Documento' onChange={change} />
                            </div>
                        </div>
                        <div>
                            <div className='row mt-5 mb-5'>
                                <div className='col-6'>
                                    <label style={{ fontSize: '1.6rem' }} className='form-label' for="password">Contraseña</label>
                                    <input style={{ fontSize: '1.6rem' }} name='password' className="form-control" id='password' type="password" placeholder='Contraseña' onChange={change} />
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: '1.6rem' }} className='form-label' for="email">Correo electrónico</label>
                                    <input style={{ fontSize: '1.6rem' }} name='email' className="form-control" id='email' type="email" placeholder='Correo' onChange={change} />
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>
                            <button type="submit" style={{ fontSize: '1.6rem' }} className='btn btn-primary'>Registrarse</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ConsModal;