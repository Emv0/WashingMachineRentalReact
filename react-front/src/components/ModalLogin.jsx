import axios from 'axios';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2';

export default function ModalLogin({ loginModal, hideLoginModal }) {

    const URI = "http://localhost:8000/";
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const change = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    };

    const login = (e) => {
        axios.post(`${URI}authUser`, formData)
            .then(response =>{
                hideLoginModal()
                sessionStorage.setItem('authToken',response.data.token)
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1000
                })
                setTimeout(()=>{
                    window.location.reload();
                },1000)
            }
            )
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            )
            e.preventDefault()
    };



    return (
        <>
            <Modal
                size="md"
                show={loginModal}
                onHide={hideLoginModal}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton style={{ fontSize: 13 }}>
                    <Modal.Title style={{ fontSize: 20 }} id="example-modal-sizes-title-md">
                        Iniciar sesión
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='mt-3' onSubmit={login}>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input className='form-control' type="email" id='email' name="email" onChange={change}/>
                        <label htmlFor="password" className='form-label mt-3' >Contraseña</label>
                        <input className='form-control' type="password" id='password' name="password" onChange={change}/>
                        <Modal.Footer className='mt-4'>
                            <button type="submit" style={{ fontSize: 16 }} className='btn btn-primary'>Iniciar sesión</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    )
}
