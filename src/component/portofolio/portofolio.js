import "./Portofolio.css";
import axios from "axios";
import fileDownload from "js-file-download";

export default function portofolio() {
  // const clickme = (e) => {
  //   e.preventDefault();
  //   axios({
  //     url: "http://localhost:3000/",
  //     method: "GET",
  //     ResponseType: "blob",
  //   }).then((res) => {
  //     console.log(res);
  //     fileDownload(res.data, "Resume Muhammad Omar Mochtar.pdf");
  //   });
  // };

  return (
    <div className="about">
      <div className="dalem2">
        <div className="kanankiri">
          <div className="bergerak">
            <div className="gerakgerak">
              <div className="pertama">Web Developer (Front End)</div>
              <div className="pertama">Mobile Developer (Front End)</div>
              <div className="pertama">Web Developer (Front End)</div>
              <div className="pertama">Mobile Developer (Front End)</div>
            </div>
          </div>
        </div>
        <div className="isiabout">
          <h1 className="isis">About Me</h1>
          <p className="isinya">
            University of Indonesia computer engineering student semester 6, To
            gain experience and knowledge through the involvement of different
            job opportunities, working in teams or on personal basis. To apply
            my communication and managerial skills. Looking forward to improve
            myself in new professional challenges and experiences in order to
            develop as a future leader. Always looking for ways to better
            others. Hardworking, loyal, persistent and always ready to learn
            from mistakes
          </p>

          <div ontouchstart="">
            <a href="https://drive.google.com/file/d/1S7_wOtZGRrWePjOdi3dMz2qiKpQVQaMy/view?usp=sharing">
              <div class="button">
                <a>Download CV</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
