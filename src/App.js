import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import HeaderMenu from "./client/HeaderMenu";

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
