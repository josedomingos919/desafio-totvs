import React from "react";
import { myFiles } from "../../assets";

export default function ListContainer(props) {
  return (
    <div className="container-card-div">
      <div>
        <h1>Resultado da Busca</h1>
      </div>

      <div className="container-list-div">
        <ul>
          <li>
            <section>
              <div className="info-div">
                <span>Maind info</span>
              </div>
              <div>
                <button className="btn-detail">
                  Ver detalhes da ação <img src={myFiles.iconDown}></img>
                </button>
              </div>
            </section>
            <div className="container-li-body">
              <div>
                <p>
                  ftugybukmdvdvPor enquanto é só! Volte mais tarde para
                  visualizar novas notificaçõe dfshfikjdsjjs
                </p>
              </div>
              <div>
                <button className="btn-see-more">VER MAIS</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
