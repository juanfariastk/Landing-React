import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const SectionOne:React.FC = () =>{
    return(
        <section className="primeira-secao" id="infosec">
            <Container>
            <Row className="align-items-center">
                    <Col md={6}>
                        <h2>Informações I</h2>
                    </Col>
                    <Col md={6}>
                        <h2> Informações II</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}