import React, { useState, useEffect } from 'react'
import { socials } from "../util/consts";

const Footer = () => {
  return (
    <div>
      <ul className={`social-icons ${showLinks && "show"}`}>
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
