import React, { useState, useEffect, useRef } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import  gsap from "gsap";
import { ScrollTrigger } from "gsap/all"

export const MenNav:React.FC = () =>{
    const[pagAtual, setpagAtual] = useState('home')
    const[navScrollAtivo, setnavScrollAtivo] = useState(true)
    const scrollTop = useRef(0)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("progress", {
          value: 100,
          scrollTrigger: {
            scrub: 1.2,
          },
        });
      }, []);

    

    useEffect(() => {
        window.addEventListener(
          "scroll",
          () => {
            var { pageYOffset } = window;
            if (pageYOffset > scrollTop.current) {
              setnavScrollAtivo(false);
            } else if (pageYOffset < scrollTop.current) {
              setnavScrollAtivo(true);
            } 
            scrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
          },
          { passive: true }
        );
      }, []);


      const mudarLinkAtivo = (link:string) => {
        setpagAtual(link)
    }
    return(
        <>
        <progress max="100" value="0"> </progress>

        <Navbar expand="md" className={`${navScrollAtivo ? "visible" : ""}`} >
            <Container>
                <Navbar.Brand href="#home"> <h3>Logo</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <span className="nav-toggle"></span> </Navbar.Toggle>

               <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={pagAtual === 'home'? 'active navbar-link':'navbar-link'} onClick={ () => mudarLinkAtivo('home')}>Home</Nav.Link>
                        <Nav.Link href="#infosec" className={pagAtual === 'infosec'? 'active navbar-link':'navbar-link'} onClick={ () => mudarLinkAtivo('infosec')}>Informações</Nav.Link>
                        <Nav.Link href="#contatform" className={pagAtual === 'contatform'? 'active navbar-link':'navbar-link'} onClick={ () => mudarLinkAtivo('contatform')}>Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse> 

            </Container>
        </Navbar>
        </>
    );
}