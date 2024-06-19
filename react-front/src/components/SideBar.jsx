import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'

export default function SideBar() {
    const url = "http://localhost:8000/";
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const user = JSON.parse(sessionStorage.getItem("user"));

    useEffect(() => {
        const dataConsult = async () => {
            try {
                const response = await axios.get(`${url}userMachineConsult/${user.id}`)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        dataConsult();
    }, [user])

    const consultMachine = async () => {
        setShow(true)
        try {
            const response = axios.get(`${url}userMachineConsult`);
            console.log("consulta exitosa", response);
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <i onClick={consultMachine} class="fa-solid fa-bars" style={{ color: "#3cbfe9", cursor: "pointer" }}></i>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tus lavadoras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
