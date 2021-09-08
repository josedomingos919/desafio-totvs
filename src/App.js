import { myFiles } from "./assets";
import "./styles/main.css";
import { Button } from "reactstrap";
import { getNotItemInList } from "./util";
import ListContainer from "./components/list";

function App() {
  const { logo } = myFiles;

  return (
    <div className="App">
      <header className="appHeader">
        <div>
          <img className="logo-img" src={logo} alt="logo" />
        </div>
      </header>
      <main className="main-container">{<ListContainer />}</main>
    </div>
  );
}

export default App;
