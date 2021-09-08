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

export function removeAcento(text) {
  text = text.toLowerCase();
  text = text.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
  text = text.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
  text = text.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
  text = text.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
  text = text.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
  text = text.replace(new RegExp("[Ç]", "gi"), "c");
  return text;
}
