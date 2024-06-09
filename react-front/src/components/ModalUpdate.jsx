import axios from 'axios';
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ModalUpdate({ lgShow, closeModal, userID, updateUser }) {

    const URI = "http://localhost:8000/";
    const [passShow, setPassShow] = useState(false);
    const [user, setUser] = useState([]);
    const [userName, setUserName] = useState('');
    const [userDocument, setUserDocument] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        axios.get(`${URI}userUnique/${userID}`)
            .then(response => {
                setUser(response.data)
            }
            )
            .catch(error => {
                console.log(["error consultando", error, 500])
            })

    }, [userID]);

    const showPass = () => {
        if (passShow === false) {
            setPassShow(true)
        } else {
            setPassShow(false)
        }
    }

    useEffect(() => {
        setUserName(user.name);
        setUserDocument(user.document);
        setUserPassword(user.password);
        setUserEmail(user.email);
    }, [user]);

    const updatedUser = (e) => {
        e.preventDefault();
        const newData = {
            name: userName,
            document: userDocument,
            password: userPassword,
            email: userEmail,
        }
        if (newData.name === "" || newData.document === "" || newData.password === "" || newData.email === "") {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Todos los campos deben estar completos",
                showConfirmButton: false,
                timer: 1000
            })
        } else {
            axios.put(`${URI}userUpdate/${user.id}`, newData)
                .then(
                    updateUser(),
                    closeModal(),
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Usuario actualizado",
                        showConfirmButton: false,
                        timer: 1000
                    }))
                .catch(error => {
                    console.log(["Error actualizando usuario", error, 500])
                })
        }
    }

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
                    <form onSubmit={updatedUser}>
                        <div className='row mt-3 wrap'>
                            <div className='col-6'>
                                <label style={{ fontSize: 16 }} className='form-label' for="name">Nombre</label>
                                <input style={{ fontSize: 16 }} value={userName} name='name' className="form-control" id='name' type="text" placeholder='Nombre' onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className='col-6'>
                                <label style={{ fontSize: 16 }} className='form-label' for="document">Documento</label>
                                <input style={{ fontSize: 16 }} value={userDocument} name='document' className="form-control" id='document' type="text" placeholder='Documento' onChange={(e) => setUserDocument(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <div className='row mt-5 mb-5'>
                                <div className='col-6'>
                                    <label style={{ fontSize: 16 }} className='form-label' for="password">Contraseña
                                    </label>
                                    <div className="d-flex align-items-center">
                                        <input style={{ fontSize: 16 }} value={userPassword} name='password' className="form-control" id='password' type={passShow ? "text" : "password"} placeholder='Contraseña' onChange={(e) => setUserPassword(e.target.value)} />
                                        <i id='pass-eye' className="fa-regular fa-eye ml-2 btn btn-primary" style={{ fontSize: 28 }} onClick={showPass}></i>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: 16 }} className='form-label' for="email">Correo electrónico</label>
                                    <input style={{ fontSize: 16 }} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} name='email' className="form-control" id='email' type="email" placeholder='Correo' />
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
