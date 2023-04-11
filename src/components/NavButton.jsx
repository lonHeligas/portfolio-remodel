import React from 'react';
// import "../styles/navbutton.css"
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'


const NavButton = ({name, href}) => <li className="nav-item">
                <Link className={"nav-link active"} to={href}>{name}</Link>
              </li>



export default NavButton;