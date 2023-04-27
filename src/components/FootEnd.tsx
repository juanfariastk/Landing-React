import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SvgIcon } from "@mui/material";

export const FootEnd:React.FC = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-cta pt-5">
          <Row>
            <Col xl={4} md={4} mb={30}>
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Endereço </h4>
                  <span>Rua Meu Doce Amor, nº 42 - Bairro do Suco Adocicado, 51287-260 </span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} mb={30}>
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Telefone</h4>
                  <span>(83) 4002 8922</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} mb={30}>
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Email</h4>
                  <span>amor@gmail.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-content pt-5 pb-1">
          <Row>
            <Col xl={4} lg={4} mb={50}>
              <div className="footer-widget">
                <div className="footer-social-icon">
                  <span>Mídias Sociais</span>
                  <ul className="social_icon">
                    <li><a href="#"><i className=""><SvgIcon component={FacebookIcon}/></i></a></li>
                    <li><a href="#"><i className=""><SvgIcon component={TwitterIcon}/></i></a></li>
                    <li><a href="#"><i className=""><SvgIcon component={InstagramIcon}/></i></a></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} mb={30}>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Links</h3>
                </div>
                <ul>
                  <li><a href="#">Sobre nós</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Politicas de privacidade</a></li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} mb={30}>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Não perca nossas novidades!</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Digite seu email"
                      aria-label="Email"
                      aria-describedby="Email"
                      type="email"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Confirmar
                    </Button>
                </InputGroup>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
    );
}
