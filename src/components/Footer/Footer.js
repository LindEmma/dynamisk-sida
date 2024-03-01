import "./Footer.css";
import moon from "./moon.svg";
import sun from "./icons8-sun-50.png";

{
  /* A footer with two icons */
}
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="icons">
        <img
          className="moon"
          src={moon}
          alt="moon-icon"
        ></img>
        <img
          className="sun"
          src={sun}
          alt="sun-icon"
        ></img>
      </div>
    </div>
  );
}
