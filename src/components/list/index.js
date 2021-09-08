import { useState } from "react";
import { myFiles } from "../../assets";
import { Modal, ModalFooter, ModalBody, Button } from "reactstrap";

export default function ListContainer({ data = [] }) {
  const [activeItem, setActiveItem] = useState([]);

  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  return (
    <div className="container-card-div">
      <Modal isOpen={modal} toggle={() => {}}>
        <ModalBody>
          <div className="modal-container-in">
            <p>Tem certeza que deseja ir para a tela?</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Não
          </Button>
          <Button color="secondary" onClick={toggle}>
            Sim
          </Button>
        </ModalFooter>
      </Modal>

      <div>
        <h1>Resultado da Busca</h1>
      </div>

      <div className="container-list-div">
        <ul>
          {data.map(({ label, value, description, img }, i) => (
            <li key={i}>
              <section>
                <div className="info-div">
                  <span>{label} </span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if (activeItem.includes(value))
                        setActiveItem((prev) => [
                          ...prev.filter((e) => e !== value),
                        ]);
                      else setActiveItem((prev) => [...prev, value]);
                    }}
                    className="btn-detail"
                  >
                    Ver detalhes da ação{" "}
                    <img
                      src={
                        activeItem.includes(value)
                          ? myFiles.iconUp
                          : myFiles.iconDown
                      }
                      alt="seta"
                    ></img>
                  </button>
                </div>
              </section>
              {activeItem.includes(value) && (
                <div className="container-li-body">
                  <div>
                    <p>
                      <img
                        src={img}
                        className="img-info"
                        alt="marca-imagem"
                        align="left"
                      />
                      {description}
                    </p>
                  </div>
                  <div>
                    <button onClick={toggle} className="btn-see-more">
                      VER MAIS
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
