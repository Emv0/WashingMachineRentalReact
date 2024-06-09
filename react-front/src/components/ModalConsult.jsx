import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import ModalUpdate from "./ModalUpdate";

const ModalConsult = ({ lgShowConsult, closeModalConsult }) => {
    const [usersDb, setUsersDb] = useState([]);
    const URI = "http://localhost:8000/";
    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Documento",
            selector: row => row.document,
            sortable: true
        },
        {
            name: "Nombre",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Correo",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Acciones",
            selector: row => (
                <div>
                    <i id={row.id} onClick={dataDelete} class="fa-solid fa-trash btn btn-danger" style={{ fontSize: 12, marginRight: "2px" }}></i>
                    <i id={row.id} onClick={showModal} class="fa-solid fa-pen btn btn-primary" style={{ fontSize: 12, marginRight: "2px" }}></i>
                </div>
            )
        }
    ];

    useEffect(() => {
        axios.get(`${URI}userConsult`)
            .then(response => {
                setUsersDb(response.data);
            })
            .catch(err => {
                console.log("error", err)
            });
    }, []);

    const updateUser = () => {
        axios.get(`${URI}userConsult`)
            .then(response => {
                setUsersDb(response.data);
            })
            .catch(err => {
                console.log("error", err)
            });
    }

    const [lgShow, setLgConsult] = useState(false);
    const [userID, setUserID] = useState(0);

    const showModal = (e) => {
        setUserID(e.target.id);
        setLgConsult(true);
    }

    const closeModal = () => {
        setLgConsult(false)
        updateUser();
    }


    const dataDelete = (e) => {
        Swal.fire({
            title: "Estás seguro de eliminar un usuario?",
            text: "Eliminaras al usuario con el id " + e.target.id,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${URI}userDelete/${e.target.id}`)
                    .then(response => {
                        console.log("Usuario eliminado", response.data)
                        axios.get(`${URI}userConsult`)
                            .then(response => {
                                setUsersDb(response.data);
                            })
                            .catch(err => {
                                console.log("Error al obtener usuarios", err);
                            });
                        Swal.fire({
                            title: "Exito!",
                            text: "El usuario fue eliminado",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log("Error eliminando", error)
                    })
            }
        });
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
                        Usuarios
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DataTable columns={columns}
                        data={usersDb}
                        pagination
                        highlightOnHover
                        pointerOnHover />
                </Modal.Body>
            </Modal>
            <ModalUpdate lgShow={lgShow} closeModal={closeModal} userID={userID} updateUser={updateUser} />
        </>
    )
}

export default ModalConsult;