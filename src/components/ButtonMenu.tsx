import React from "react";
import { FC, PropsWithChildren, useState, useEffect } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { SvgIcon } from "@mui/material";
import { styled } from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add";
import AddCommentIcon from '@mui/icons-material/AddComment';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import SendIcon from '@mui/icons-material/Send';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className="material-symbols-outlined">{children}</i>
  );
  
  export const ButtonMenu:React.FC = () => {
    const [botaoAberto, setAberto] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const [show2, setShow2] = useState<boolean>(false)
    const [show3, setShow3] = useState<boolean>(false)
  
    const handleEnviar = () => {
      setShow(false)
      setShow3(false)
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
          <button onClick={() => setShow3(true)}>
            <SvgIcon component={StarPurple500Icon} />
            <span className="span-menu">Avalie-nos</span>
          </button>
          <Modal
            show={show3}
            onHide={() => setShow3(false)}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Avaliação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Form.Group className="d-flex flex-column align-items-center mb-3" controlId="exampleForm.ControlInput1">
            <StyledRating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly className="m-2" />
            </Form.Group>

              <Form.Control type="text" placeholder="Deixe uma avaliação" autoFocus className="col col-sm-6 p-3" style={{ maxWidth: '300px' }} />

          </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setShow3(false)}>
                Fechar
              </Button>
              <Button className="my-button" onClick={handleEnviar}>
                Enviar Avaliação <span> <SvgIcon component={SendIcon} /></span>
              </Button>
            </Modal.Footer>
          </Modal>
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
  