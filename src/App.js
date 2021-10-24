import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import HeaderMenu from "./client/headerMenu";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMenu />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
