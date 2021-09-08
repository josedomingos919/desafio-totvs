import { myFiles } from "./assets";

export function getNotItemInList() {
  return (
    <div className="no-file-div">
      <img className="no-item-img" src={myFiles.noFile} alt="logo" />
      <p>
        Você ainda não realizu<br></br>nenhuma busca!
      </p>
    </div>
  );
}
