import React, { useState } from 'react'
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Navbar2nd = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar className="offCanva" variant="dark" >
                <Container fluid >

                    <Button id="btn-OffCanva" onClick={handleShow}>
                        <i className="fas fa-bars" style={{ color: 'coral' }}></i>
                    </Button>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />


                    <Nav className="me-auto">
                        <Nav.Link href="#all">All</Nav.Link>
                        <Nav.Link href="#today">Today's Deals</Nav.Link>
                        <Nav.Link href="#customer">Customer Service</Nav.Link>
                        <Nav.Link href="#registry">Registry</Nav.Link>
                        <Nav.Link href="#gifs">Gif Cards</Nav.Link>
                        <Nav.Link href="#sell"><Link to="/sell">Sell</Link></Nav.Link>
                        
                    </Nav>






                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header variant="dark" className='offcanvaTitle' closeButton>
                            <Offcanvas.Title  className='ms-5 '><i className="fas fa-user-circle"></i> Hello, Sign In</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                                <Nav.Link href="#action1">Computer</Nav.Link>
                                <Nav.Link href="#action2">laptop</Nav.Link>
                                <Nav.Link href="#action3">Screen</Nav.Link>
                                <Nav.Link href="#action4">Gadget</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>

                </Container>
            </Navbar >
        </>
    )
}
