import logo from "./logo.svg";
import "./App.css";
import Bottombar from "./component/bottom/Botbar";
import Topbar from "./component/topbar/Topbar";
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
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/portofolio" element={<Portofolio />} />
      </Routes>
    </Router>

    // <div className="App">
    //   <Topbar />
    //   <div className="sections">
    //     <Intro />
    //     <Portofolio />
    //     <Works />
    //     <Skill />
    //   </div>
    //   <div className="bottombar">
    //     <Bottombar />
    //   </div>
    // </div>
  );
}

export default App;
