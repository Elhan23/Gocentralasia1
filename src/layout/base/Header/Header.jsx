import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo/logo.svg";
import caret from "../../../assets/icons/logo/caret.svg";
import glass from "../../../assets/images/glass.png";
import './Header.scss'

function Header() {
  return (
    <header className="container">
      <div className="header_style">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="header_link">
          <ul>
            <span className="caret_style">
              <NavLink to='/destination'>Destination</NavLink>
              <img src={caret} alt="caret" />
            </span>
            <span className="caret_style">
              <NavLink>Tours</NavLink>
              <img src={caret} alt="caret" />
            </span>
            <NavLink>Blog</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Contact Us</NavLink>
          </ul>
        </div>

        <span className="glass_style">
          <img src={glass} alt="glass" />
          <p>ENG</p>
          <img src={caret} alt="caret" />
        </span>
      </div>
    </header>
  );
}

export default Header;
