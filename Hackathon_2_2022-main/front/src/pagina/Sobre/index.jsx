import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Nav";
import logo from "../../Images/logo.png";
import "./../Sobre/index.css";

function Sobre() {
  return (
    <>
      <div>
        <div>
          <Navbar brand={"Almanaque Rick and Morty"} sobre={"Sobre"} />
          <div
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h1>Almanaque Rick And Morty</h1>

            <img className="imgSobre" src={logo} />

            <h3>Para que foi criado</h3>
            <p style={
              {
                padding:"50px  100px 50px 100px"
              }
            }>
              Este site tem o intuito de lhe apresentar todos os personagens que
              já apareceram durante a serie de Rick and Morty, a serie tem como
              principal integrante o Morty que é neto do avô mais inteligente de
              todas as galaxias Rick a mente mais brilhante em todo o universo e
              também o mais niilista de todos. Eles vivem junto grandes
              aventuras nas mais diversas realidades possíveis, totalmente
              escatológico, nonsense e politicamente incorreto, do jeitinho que
              a adult swim gosta! wabba lubba dub dub!!!
            </p>
          </div>
        </div>
      </div>
      <Footer name="Desenvolvido por Rhuan e Murilo" />
    </>
  );
}

export default Sobre;
