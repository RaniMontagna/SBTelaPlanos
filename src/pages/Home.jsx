import React from "react";
import Plano from "../components/layout/DivPlano";
import "./Home.css";

function Home() {
  const planos = [
    {
      nome: "Inicial",
      descricao: "Ideal para empresas que estão iniciando sua gestão",
      preco: "97",
      li: "Gestão de Vendedores",
      button: "Plano Atual",
    },
    {
      nome: "Essencial",
      descricao: "Ideal para empresas que querem gerenciar seus vendedores",
      preco: "197",
      li: "Gestão de até 03 vendedores",
      button: "Alterar Plano",
    },
    {
      nome: "Plus",
      descricao: "Ideal para empresas em crescimento acelerado",
      preco: "297,",
      li: "Gestão de até 10 vendedores",
      button: "Alterar Plano",
    },
  ];

  return (
    <div className="Home">
      <h1>Todos os Planos</h1>
      <div className="Planos">
        {planos.map((plano, index) => {
          if (index === 0) {
            plano.buttonIsMarked = "btnDisabled";
            plano.liNaoIncluso = "liNaoIncluso";
          }
          
          if (index === 1 || index === 2) {
            plano.liNegrito = "liNegrito";
          }

          return (
            <li key={plano.id}>
              <Plano
                nome={plano.nome}
                descricao={plano.descricao}
                preco={plano.preco}
                li={plano.li}
                button={plano.button}
                buttonIsMarked={plano.buttonIsMarked}
                liNaoIncluso={plano.liNaoIncluso}
                liNegrito={plano.liNegrito}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
