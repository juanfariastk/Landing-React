import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const MenNav:React.FC = () =>{
    return(
        <Navbar >
            <Container>
                <Navbar.Brand href="#home"> <h3> Logo ou Imagem </h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <span className="nav-toggle"></span> </Navbar.Toggle>

               <Navbar.Collapse id="navbar-collapse">
                    <Nav className="margin-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#quemsomos">Quem somos?</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse> 

            </Container>
        </Navbar>
    );
}