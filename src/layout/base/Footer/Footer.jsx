import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import phone from "../../../assets/images/phone.svg";
import email from "../../../assets/images/email.svg";
import zontik from "../../../assets/images/zontik.svg";
//
import facebook from "../../../assets/images/footer/facebook.svg";
import whatsapp from "../../../assets/images/footer/whatsapp.svg";
import instagram from "../../../assets/images/footer/instagram.svg";
import google from "../../../assets/images/footer/google.svg";
import youtube from "../../../assets/images/footer/youtube.svg";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="bg_footer">
      <div className="container">
        <div className="footer_style">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <span className="contact_footer">
            <h3>Contact Information</h3>
            <span className="mini_contact">
              <img src={phone} alt="phone" />
              <p>+996 700 01 55 99</p>
            </span>
            <span className="mini_contact">
              <img src={email} alt="email" />
              <p>logo@gmail.com</p>
            </span>
          </span>

          <span className="contact_footer1">
            <h3>Main</h3>
            <Link>Tours</Link>
            <Link>Info</Link>
            <Link>Blog</Link>
            <Link>About Us</Link>
            <Link>Contact</Link>
          </span>

          <span className="contact_footer1">
            <h3>Travel Destination</h3>
            <Link>Kyrgyzstan</Link>
            <Link>Kazakhstan</Link>
            <Link>Uzbekistan</Link>
            <Link>Tajikistan</Link>
            <Link>Turkmenistan</Link>
          </span>

          <span className="contact_footer1">
            <h3>Policy</h3>
            <Link>Payment policy</Link>
            <Link>Return policy</Link>
            <Link>Service terms</Link>
            <Link>Sitemap</Link>
          </span>

          <span>
            <img src={zontik} alt="zontik" />
          </span>
        </div>

        <div className="end_foooter">
          <p>Copyright © 2024 Name All rights reserved</p>

          <span className="end_img">
            <img src={facebook} alt="facebook" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={instagram} alt="instagram" />
            <img src={google} alt="google" />
            <img src={youtube} alt="youtube" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
