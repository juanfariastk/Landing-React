import React from "react";
import { ChangeEvent,useState } from "react";
import { Card, Col, Row, Button, Modal, Form } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import { FormGroup, FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import img_Suco from "../assets/istockphoto-1279829945-612x612-transformed.jpeg";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  fontFamily: "'Montserrat', sans-serif",
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));


const InfoCard: React.FC<{ title:string; text: React.ReactNode }> = ({ title, text }) => {
    const [show, setShow] = useState(false);
    const [opçaoCompra, setopçaoCompra] = useState('');

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      if (value !== null) {
        setopçaoCompra(value);
      }
    }
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePurchase = () => {
        console.log('Produto selecionado:', opçaoCompra);
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
      <Modal show={show} onHide={handleClose} className="modal-compra">
        <Modal.Header closeButton>
          <Modal.Title>Compra de Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="productSelect">
            <Form.Label>Selecione um modelo:</Form.Label>
            <Form.Select size="lg" onChange={handleOptionChange} >
              <option value="produto1">Modelo 1</option>
              <option value="produto2">Modelo 2</option>
              <option value="produto3">Modelo 3</option>
            </Form.Select>
          </Form.Group>
          <FormControlLabel className="mt-2" control={<Android12Switch defaultChecked />} label="Receber detalhes do pedido via WhatsApp?" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button className="button2" variant="success" onClick={handlePurchase}>
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