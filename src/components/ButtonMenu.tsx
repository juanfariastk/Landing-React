import React from "react";
import { FC, PropsWithChildren, useState } from "react";
import { SvgIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCommentIcon from '@mui/icons-material/AddComment';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';


const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className="material-symbols-outlined">{children}</i>
  );
  
export const ButtonMenu:React.FC = () => {
    const [botaoAberto, setAberto] = useState<boolean>(false)
    return(
        <div className={`fab ${botaoAberto ? "open" : ""}`}>
        <button onClick={() => setAberto(!botaoAberto)}>
          <SvgIcon component={AddIcon} />
        </button>
        <div className="menu">
          <button>
          <SvgIcon component={AddCommentIcon} />
            <span className="span-menu">Adicionar Comentário</span>
          </button>
          <button>
            <SvgIcon component={StarPurple500Icon} />
            <span className="span-menu">Avalie-nos</span>
          </button>
        </div>
      </div>
    )
}