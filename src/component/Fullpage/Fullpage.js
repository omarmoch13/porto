import Botbar from "../bottom/Botbar";
import Topbar from "../topbar/Topbar";
import Intro from "../intro/Intro";
import Works from "../works/Works";
import Skill from "../skill/Skill";
import Portofolio from "../portofolio/Portofolio";
function Fullpage() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Skill />
      </div>
      <div className="bottombar">
        <Botbar />
      </div>
    </div>
  );
}

export default Fullpage;
