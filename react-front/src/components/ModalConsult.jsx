import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";

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
            name:"Acciones",
            selector: row =>(
                <div>
                    <i class="fa-solid fa-trash btn btn-primary" style={{fontSize:16, marginRight:"2px"}}></i>
                    <i class="fa-solid fa-pen btn btn-primary" style={{fontSize:16,marginRight:"2px"}}></i>
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
                console.log(["error antes de controlador", err, 500]);
            });
    }, []);

    return (
        <>
            <Modal
                size="xl"
                show={lgShowConsult}
                onHide={closeModalConsult}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{ fontSize: 13 }}>
                    <Modal.Title style={{ fontSize: 20 }} id="example-modal-sizes-title-lg">
                        Usuarios
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <DataTable columns={columns} 
                        data={usersDb}                 
                        pagination
                        highlightOnHover
                        pointerOnHover/>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalConsult;