import "./Navbar.css";
import logo2 from "../../assets/logoomar.png";

export default function topbar() {
  return (
    <div className="Topbar">
      <div className="atas">
        <div className="logo">
          <img src={logo2} alt="" className="logoo" />
        </div>
      </div>
      <div className="top">
        <a href="/intro">Me</a>
        <a href="/portofolio">About</a>
        <a href="works ">Works</a>
      </div>
    </div>
  );
}
