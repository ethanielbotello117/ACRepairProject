import React, { useState, useEffect } from "react";
import { pictures } from '../util/consts';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="galTitle">Photo Gallery</h1>
      <div className="photos">
        {pictures.map((image) => {
            const { id, img } = image;
            return (
              <div key={id} className="gImg" style={{backgroundImage: img}}></div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
