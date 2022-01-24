import "./App.css";

import Fullpage from "./component/Fullpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Fullpage />} />
      </Routes>
    </Router>
  );
}

export default App;
