import React from "react";
import { useState } from "react";
import { Card, Col, Row, Button, Modal, Form } from "react-bootstrap";
import img_Suco from "../assets/istockphoto-1279829945-612x612-transformed.jpeg";

const InfoCard: React.FC<{ title:string; text: React.ReactNode }> = ({ title, text }) => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      }
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePurchase = () => {
        console.log('Produto selecionado:', selectedOption);
        handleClose();
      }

  return (
    <Card className="info-card bg-light text-dark">
      <Row className="align-items-center">
        <Col md={6}>
          <Card.Img variant="top" src={img_Suco} alt="Imagem" />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="danger" onClick={handleShow}> Adquira já!</Button>
          </Card.Body>
          
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compra de Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="productSelect">
            <Form.Label>Selecione um produto:</Form.Label>
            <Form.Control as="select" onChange={handleOptionChange} value={selectedOption}>
              <option value="produto1">Produto 1</option>
              <option value="produto2">Produto 2</option>
              <option value="produto3">Produto 3</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handlePurchase}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    
  );
};

export const SectionOne: React.FC = () => {
  return (
    <section className="info-section" id="infosec">
      <InfoCard
        title="Informações I"
        text="Aqui vai o conteúdo do texto de Informações II, sendo sobre o produto mostrando conteúdos que 
        possam chamar a atenção, tais como: a versatilidade do produto, motivo de ser inovador, aspecto tecnológico marcante e etc"
      />
    </section>
  );
};