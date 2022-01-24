import "./App.css";

import Intro from "./component/intro/Intro";
import Works from "./component/works/Works";
import Skill from "./component/skill/Skill";
import Portofolio from "./component/portofolio/Portofolio";
import Fullpage from "./component/Fullpage/Fullpage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Fullpage />} />
        {/* <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/portofolio" element={<Portofolio />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
