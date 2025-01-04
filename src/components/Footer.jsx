import React from "react";
import p1R from "../assets/p1R.jpg";
import P2R from "../assets/P2R.jpg";
import omkar from "../assets/omkar.jpg";

import p4 from "../assets/p4.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="copyright">© 2025 Electrical Coders. All rights reserved.</p>
        <p className="hackathon-message">This project was built for the Annual Hackathon 2025. Proudly developed by our team!</p>
        <div className="team">
          <h4>Meet the Team:</h4>
          <div className="team-members">
            <div className="member">
              <img src={omkar} alt="Member 1" className="member-image" />
              <p>Omkar</p>
            </div>
            <div className="member">
              <img src={P2R} alt="Member 2" className="member-image" />
              <p>Atharv</p>
            </div>
            <div className="member">
              <img src={p1R} alt="Member 3" className="member-image" />
              <p>Vaibhav</p>
            </div>
            <div className="member">
              <img src={p4} alt="Member 4" className="member-image" />
              <p>Atif </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
