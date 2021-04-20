import React from "react";
import "./DivPlano.css";

import ListaItens from "./ListaItens";

function Plano(props) {
  return (
    <div className="Plano">
      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
      <h3>
        <span className="rs">R$</span>
        <span>{props.preco}</span>,00/mês
      </h3>

      <ul>
        <ListaItens nome={props.li} liNaoIncluso={props.liNaoIncluso} liNegrito={props.liNegrito}/>
        <ListaItens nome="Etapas de negociação" />
        <ListaItens nome="Acompanhamento de propostas" />
        <ListaItens nome="Registro de Atividades" />
        <ListaItens nome="Aplicativo para vendedores" liNaoIncluso={props.liNaoIncluso} liNegrito={props.liNegrito} />
        <ListaItens nome="Suporte gratuito" />
      </ul>

      <button className={props.buttonIsMarked}>{props.button}</button>
    </div>
  );
}

export default Plano;
