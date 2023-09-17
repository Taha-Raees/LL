import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
        
          <span className="logo"><img src="/Little-Lemon/images/Asset 20@4x.png " /></span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
      </div>
      <div className="top">
        <div className="item1">
          <h1>Links</h1>
          <Link className ="link" to="/"><span>Home</span></Link>
          <Link className ="link" to="/menu"><span>Menu</span></Link>
          <Link className ="link" to="/"><span>Drinks</span></Link>
          <Link className ="link" to="/reservation"><span>Reservation</span></Link>

        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;