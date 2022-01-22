import "./Intro.css";
import foto2 from "../../assets/foto2.jpg";

export default function intro() {
  return (
    <div className="sebelah">
      <div className="dalem">
        <div className="kirikanan">
          <div className="sebelahkiri">
            <h2 className="kiriintro"> Hello, My name is</h2>
            <h1 className="kirinama">Muhammad Omar Mochtar</h1>
            <h2 className="univ">
              Computer Engineering Student at University of Indonesia
            </h2>
          </div>
        </div>
        <div className="kanan">
          <div className="kanan2">
            <img src={foto2} alt="" className="kekanan" />
          </div>
        </div>
      </div>
    </div>
  );
}
