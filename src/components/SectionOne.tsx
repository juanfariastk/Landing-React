import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_Suco from "../assets/istockphoto-1279829945-612x612-transformed.jpeg"

export const SectionOne:React.FC = () =>{
    return(
        <section className="primeira-secao" id="infosec">
            <Container fluid>
                <Row>
                    <Col md={4}>
                    <img src={img_Suco} alt="Imagem" className="img_suquinho" />
                    </Col>
                    <Col md={4}>
                    <h2>Informações II</h2>
                    <p>Aqui vai o conteúdo do texto de Informações II.</p>
                    </Col>
                    <Col md={4}>
                        <h2>asdasda</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}