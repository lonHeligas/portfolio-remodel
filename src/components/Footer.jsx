import * as React from "react";
import "../styles/footer.css";
import Button from "react-bootstrap/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-bottom" style={{ zIndex: 2 }}>
    <a href="mailto: lon.heligas@gmail.com" target="_blank">
      <MailOutlineIcon size="3em" className="footer-icons" />
    </a>
    <a href="https://github.com/lonHeligas" target="_blank">
      <GitHubIcon size="3em" className="footer-icons" />
    </a>
    <h3 className="footer-text">Copyright © 2023 Lon Heligas</h3>
    <a href="https://stackoverflow.com/users/21338620/lon-heligas"
      target="_blank">
      <ReorderIcon size="3em" className="footer-icons" />
    </a>
    <a href="https://www.linkedin.com/in/lon-heligas/" target="_blank">
      <LinkedInIcon size="3em" className="footer-icons" />
    </a>
    <div className="footer-buttons"></div>
  </div>
);

export default Footer;
