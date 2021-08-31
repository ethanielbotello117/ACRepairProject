import React, { useState, useEffect } from 'react'
import { socials } from "../util/consts";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <h3>
          SOCIALS
          <div className="box"></div>
        </h3>
      </div>
      <div className="cr">
        ©Lorem Ipsum
      </div>
      <ul>
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
