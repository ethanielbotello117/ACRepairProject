// import { FaImages, FaPhone, FaInfoCircle, FaHome } from 'react-icons/fa'
import { boxLinks } from "../util/consts";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className="main">
      <div className="bg"></div>
      {boxLinks
        .filter((link) => link.text !== "Error")
        .map((link) => {
          const { id, url, text, icon } = link;
          return (
            <div className="cards" key={id}>
              <Link className="img-container" to={url}>
                <h1 className="icon">{icon}</h1>
              </Link>
              <Link to={url}>
                <h2 className="title">{text}</h2>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
