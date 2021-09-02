import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../util/consts";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const checkSize = () => {
    if(window.innerWidth >= 768) {
      setShowLinks(true)
    }
    if(window.innerWidth < 768) {
      setShowLinks(false)
    }
  }
  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize)
  }, [])

  console.log(links);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="Logo" className="logo" /> */}
          <div className="logo"><Link to="/">Logo</Link></div>
          <button className={`nav-toggle ${showLinks && 'show'}`} onClick={toggleLinks}>
            {/* <FaBars /> */}
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </button>
        </div>
        <div className={`links-container ${showLinks && 'show'}`}>
          <ul className="links">
            {links
              .filter((link) => link.text !== "Error")
              .map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;