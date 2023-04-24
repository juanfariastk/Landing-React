import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReadMoreTwoToneIcon from '@mui/icons-material/ReadMoreTwoTone';
import tomaRosinha from "../assets/147df3ac7d2ddd0f90913593431ace3e-transformed-transformed.png"
import gsap, {Expo} from "gsap";


const theme = createTheme({
    palette: {
      secondary: {
        main: "#5dcfcf"
      }
    }
  });

  
  export const HeroSec:React.FC = () => {
  
    const transicao1 = useRef<HTMLDivElement>(null);
    const transicao2 = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const element1 = transicao1.current;
      const element2 = transicao2.current;
    
      gsap.fromTo(
        element2,
        {
          opacity: 0,
          x: '100%',
        },
        {
          opacity: 1,
          x: '0%',
          duration: 1,
          ease: 'power2.out',
          stagger: 0.8,
        }
      );
    
      gsap.fromTo(
        element1,
        {
          opacity: 0,
          x: '-100%',
        },
        {
          opacity: 1,
          x: '0%',
          duration: 1,
          ease: 'power2.out',
          stagger: 0.8,
        }
      );
      
    }, []);
  
    return (
      <ThemeProvider theme={theme}>
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <div ref={transicao1}>
                  <h1 className="texto-principal display-5">Texto principal com referência ao produto</h1>
                  <p className="texto-secundario">Texto secundário para uma breve explicação ou algo que desperte a curiosidade do usuário, geralmente é aqui onde temos uma breve descrição do que o produto será útil ao usuário. </p>
                  <Button variant="contained" color="secondary" endIcon={<ReadMoreTwoToneIcon/>} sx={{ color: "#fff" }}>
                    Saiba mais
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className="img-container" ref={transicao2}>
                  <img className="img-rosinha" src={tomaRosinha} alt="imagem" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </ThemeProvider>
    )
  }
