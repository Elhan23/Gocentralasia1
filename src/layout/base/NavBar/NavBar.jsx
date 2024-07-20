import "./NavBar.scss";
import phone from "../../../assets/icons/navbar/phone.svg";
import email from "../../../assets/icons/navbar/email.svg";
import question from "../../../assets/icons/navbar/question.svg";
import insta from "../../../assets/icons/navbar/Instagram.svg";
import whatsapp from "../../../assets/icons/navbar/whatsapp.svg";
import youtube from "../../../assets/icons/navbar/youtube.svg";

function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar_style">
          <div className="contact_block">
            <span className="contact_mini_style">
              <img src={phone} alt="phone" />
              <p>+996 700 01 55 99</p>
            </span>
            <span className="contact_mini_style">
              <img src={email} alt="email" />
              <p>logo@gmail.com</p>
            </span>
            <span className="contact_mini_style">
              <img src={question} alt="question" />
              <p>FAQ</p>
            </span>
          </div>

          <div className="social_block">
            <img src={insta} alt="insta" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default NavBar;
