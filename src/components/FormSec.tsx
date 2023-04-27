import React from 'react';
import { useState } from 'react';
import { Container, Col, Row, Form, Dropdown } from 'react-bootstrap';

export const FormSec:React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey: React.SetStateAction<null>) => {
    setSelectedOption(eventKey);
  };

  return (
        <section className="contato" id="contatform">
        <Container>
            <Row className="align-items-center">
                <Col md={12}>
                    <h2> Entre em contato!</h2>
                    <form>
                        <Row>
                            <Col size={12} sm={6} className="pe-1"> <input type="text" placeholder="Primeiro Nome" pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+" ></input> </Col>
                            <Col size={12} sm={6} className="ps-1"> <input type="text"  placeholder="Sobrenome" pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+" ></input> </Col>
                            <Col size={12} sm={6} className="pe-1"> <input type="email"  placeholder="Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" ></input> </Col>
                            <Col size={12} sm={6} className="ps-1"> <input type="tel" placeholder="Telefone" pattern="^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$"></input> </Col>
                            <Col> <textarea placeholder="Digite sua mensagem"></textarea> <button type="submit" > <span>Enviar</span> </button> </Col>
                        </Row>
                    </form>
                </Col>
                
            </Row>
        </Container>
    </section>
  );
};
