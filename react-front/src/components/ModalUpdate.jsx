import axios from 'axios';
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';

export default function ModalUpdate({ lgShow, closeModal, userID }) {

    const URI = "http://localhost:8000/";
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`${URI}userUnique/${userID}`)
            .then(response => {
                setUser(response.data)
            }
            )
            .catch(error => {
                console.log(["error consultando", error, 500])
            })

    }, [userID])

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={closeModal}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{ fontSize: 13 }}>
                    <Modal.Title style={{ fontSize: 20 }} id="example-modal-sizes-title-lg">
                        Actualizar usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className='row mt-5 wrap'>
                            <div className='col-6'>
                                <label style={{ fontSize: 16 }} className='form-label' for="name">Nombre</label>
                                <input style={{ fontSize: 16 }} value={user.name} name='name' className="form-control" id='name' type="text" placeholder='Nombre' />
                            </div>
                            <div className='col-6'>
                                <label style={{ fontSize: 16 }} className='form-label' for="document">Documento</label>
                                <input style={{ fontSize: 16 }} value={user.document} name='document' className="form-control" id='document' type="text" placeholder='Documento' />
                            </div>
                        </div>
                        <div>
                            <div className='row mt-5 mb-5'>
                                <div className='col-6'>
                                    <label style={{ fontSize: 16 }} className='form-label' for="password">Contraseña</label>
                                    <input style={{ fontSize: 16 }} value={user.password} name='password' className="form-control" id='password' type="password" placeholder='Contraseña' />
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: 16 }} className='form-label' for="email">Correo electrónico</label>
                                    <input style={{ fontSize: 16 }} value={user.email} name='email' className="form-control" id='email' type="email" placeholder='Correo' />
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>
                            <button type="submit" style={{ fontSize: 16 }} className='btn btn-primary'>Editar</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
