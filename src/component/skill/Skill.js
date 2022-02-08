import "./Skill.css";
import c from "../../assets/c.png";
import postgres from "../../assets/postgres.png";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import flutter from "../../assets/flutter.png";
import figma from "../../assets/figma.png";
import git from "../../assets/github.png";
import mail from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";
import ig from "../../assets/ig.png";

export default function portofolio() {
  return (
    <div className="skill-container">
      <div className="skill-wrapper">
        <div className="skill-header">
          <h1 className="skill-head">SKILLS</h1>
          {/* <h1 className="contact-head">CONTACT ME</h1> */}
        </div>
        <div className="contact-header">
          <h1>CONTACT</h1>
        </div>
        <div className="skill-kanankiri">
          <div className="skill-kiri1">
            <div className="kiri-dalem1">
              <img src={c} alt="" className="skill1"></img>
              <img src={postgres} alt="" className="skill2"></img>
              <img src={react} alt="" className="skill3"></img>
            </div>
          </div>
          <div className="skill-kiri2">
            <div className="kiri-dalem2">
              <img src={css} alt="" className="skill4"></img>
              <img src={flutter} alt="" className="skill5"></img>
              <img src={figma} alt="" className="skill6"></img>
            </div>
          </div>
        </div>
        <div className="skill-kanan">
          <div className="skill-kanan2">
            <a href="https://github.com/omarmoch13">
              <img src={git} alt="" className="contact1"></img>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-omar-6b6469126/">
              <img src={linkedin} alt="" className="contact2"></img>
            </a>
            <a href="mailto:muhammadjendral12@gmail.com">
              <img src={mail} alt="" className="contact3"></img>
            </a>
            <a href="https://www.instagram.com/omarmoch13/">
              <img src={ig} alt="" className="contact4"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
