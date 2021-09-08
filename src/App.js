import { useState } from "react";
import { myFiles } from "./assets";
import "./styles/main.css";
import { getNotItemInList, removeAcento } from "./util";
import ListContainer from "./components/list";
import Select from "react-select";
import dataBase from "./data/marcas.json";

function App() {
  const { logo } = myFiles;
  const options = dataBase;
  const [itemName, setItemName] = useState("");

  const getData = () => {
    return dataBase.filter(({ label }) => {
      const refacr = (text = "") =>
        itemName.length <= label.length
          ? removeAcento(
              text.substring(0, itemName?.length)
            ).toLocaleLowerCase()
          : text;

      return refacr(label) === refacr(itemName) && itemName.length;
    });
  };

  return (
    <div className="App">
      <header className="appHeader">
        <div>
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <div className="select-container">
          <Select
            options={options}
            onInputChange={(e) => {
              if (e) setItemName(e);
            }}
            onChange={(e) => {
              if (e?.label) setItemName(e?.label || "");
            }}
          />
        </div>
      </header>
      <main className="main-container">
        {getData().length ? (
          <ListContainer data={getData()} />
        ) : (
          getNotItemInList()
        )}
      </main>
    </div>
  );
}

export default App;
