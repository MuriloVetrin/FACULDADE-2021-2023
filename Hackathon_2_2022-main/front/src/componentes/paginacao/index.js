import React from "react";

const Paginacao = ({ prev, next, onAnterior, onProximo }) => {
  const handleAnterior = () => {
    onAnterior();
  };
  const handleProximo = () => {
    onProximo();
  };
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center ">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handleAnterior}>
              Anterior
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleProximo}>
              Próximo
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Paginacao;
