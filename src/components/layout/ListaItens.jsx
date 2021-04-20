import React from "react";

import "./ListaItens.css";

// Icones
import { AiOutlineCheckCircle } from "react-icons/ai";

function ListaItens(props) {
  return (
    <li className={props.liNaoIncluso}>
      <li className={props.liNegrito}>
        <span className="icon blue">
          <AiOutlineCheckCircle />
        </span>
        <span className="nome">{props.nome}</span>
      </li>
    </li>
  );
}

export default ListaItens;
