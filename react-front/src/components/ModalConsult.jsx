import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const ModalConsult = ({ lgShowConsult, closeModalConsult }) => {
    const [usersDb, setUsersDb] = useState(null);

    useEffect(() => {
        axios.get('http://localhost/userConsult')
            .then(response => {
                setUsersDb(response.data);
            })
            .catch(err => {
                console.log(["error antes de controlador",err,500]);
            });
    }, []);
    return (
        <>
            <Modal
                size="lg"
                show={lgShowConsult}
                onHide={closeModalConsult}
                aria-labelledby="example-modal-sizes-title-lg"
                {...console.log(usersDb)}
            >
                <Modal.Header closeButton style={{ fontSize: '1.3rem' }}>
                    <Modal.Title style={{ fontSize: '2.0rem' }} id="example-modal-sizes-title-lg">
                        Usuarios
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <thead>
                        <tr style={{ fontSize: '2.5rem' }}>
                            <th>id</th>
                            <th>Documento</th>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </Modal.Body>
            </Modal>
        </>
    )

}

export default ModalConsult;