import Botbar from "./bottom/Botbar";
import Navbar from "./Navbar/Navbar";
import Intro from "./me/Me";
import Works from "./work/Work";
import Skill from "./skill/Skill";
import Portofolio from "./portofolio/Portofolio";

function Fullpage() {
  return (
    <div className="App">
      <Navbar />
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
