import React from "react";
import NavButton from "./NavButton";
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from "../pages";
// import "../styles/navigation.css";
const Navigation = (props) => {
  
  const NavSections = [
    { name: "About Me", href: '/' },
    { name: "Portfolio", href: '/portfolio' },
    { name:"Contact", href: '/contact' },
    { name:"Resume", href: '/resume' }
  ];

  
  return (
    <header className="nav-header" style={{ borderBottom: "5px solid #333 zIndex: 2"  }}>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-body-secondary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="##">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex p-7">
              {NavSections.map(section => <NavButton {...section} />)}             
              
            </ul>
          </div>
        </div>
      </nav>
    </header>

    
  );
};



export default Navigation;