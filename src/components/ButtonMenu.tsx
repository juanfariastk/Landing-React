import React from "react";
import { FC, PropsWithChildren, useState, useEffect } from "react";
import { SvgIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCommentIcon from '@mui/icons-material/AddComment';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import SendIcon from '@mui/icons-material/Send';
import { Modal, Form, Button, Alert } from "react-bootstrap";


const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className="material-symbols-outlined">{children}</i>
  );
  
  export const ButtonMenu:React.FC = () => {
    const [botaoAberto, setAberto] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const [show2, setShow2] = useState<boolean>(false)
  
    const handleClose = () => {
      setShow(false)
      setShow2(true)
    }
  
    const handleEnviar = () => {
      setShow(false)
      setShow2(true)
    }
  
    useEffect(() => {
      if (show2) {
        setTimeout(() => {
          setShow2(false)
        }, 3000)
      }
    }, [show2])
  
    return (
      <div className={`fab ${botaoAberto ? 'open' : ''}`}>
        <button onClick={() => setAberto(!botaoAberto)}>
          <SvgIcon component={AddIcon} />
        </button>
        <div className="menu">
          <button onClick={() => setShow(true)}>
            <SvgIcon component={AddCommentIcon} />
            <span className="span-menu">Adicionar Comentário</span>
          </button>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Envie seu comentário!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="seuemail@dominio.com" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comentário</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Digite seu comentário!" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setShow(false)}>
                Fechar
              </Button>
              <Button className="my-button" onClick={handleEnviar}>
                Enviar <span> <SvgIcon component={SendIcon} /></span>
              </Button>
            </Modal.Footer>
          </Modal>
          <button>
            <SvgIcon component={StarPurple500Icon} />
            <span className="span-menu">Avalie-nos</span>
          </button>
        </div>
        {show2 && (
          <Alert variant="success" className="alert-botao" onClose={() => setShow2(false)} dismissible>
            <Alert.Heading>Enviado!</Alert.Heading>
            <p>
              Você enviou seu comentário com sucesso, agradecemos pelo seu feedback!
            </p>
          </Alert>
        )}
      </div>
    )
  }
  