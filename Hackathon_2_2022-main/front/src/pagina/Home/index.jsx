import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/Nav";
import Personagens from "../../componentes/Cards";
import Paginacao from "../../componentes/Paginacao";
import Footer from "../../componentes/Footer";

function Home() {
  const [personagens, setPersonagens] = useState();
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchPersonagens = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setPersonagens(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onAnterior = () => {
    fetchPersonagens(info.prev);
  };

  const onProximo = () => {
    fetchPersonagens(info.next);
  };

  useEffect(() => {
    fetchPersonagens(initialUrl);
  }, []);

  return (
    <>
      {/* Barra de navegação */}
      <Navbar brand={"Almanaque Rick and Morty"} sobre={"Sobre"} />

      <div className="container mt-5">
        {/* Navegação das paginas */}
        <Paginacao
          prev={info.prev}
          next={info.next}
          onAnterior={onAnterior}
          onProximo={onProximo}
        />

        {/* Cards dos personagens */}
        <Personagens personagens={personagens} />

        {/* Navegação das paginas */}
        <Paginacao
          prev={info.prev}
          next={info.next}
          onAnterior={onAnterior}
          onProximo={onProximo}
        />
      </div>

      <Footer
        name="Desenvolvido por Rhuan e Murilo"/>
    </>
  );
}

export default Home;
