import { FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="number">
          <h1>Contact Us <FaPhone/></h1>
          <h2>+16234745069</h2>
      </div>
      <div className="location">
        <h1>Where to Find Me <FaMapMarkedAlt /></h1>
        <h2>24710 W Dove Trail, Buckeye, AZ 85326</h2>
      </div>
      <div className="map">
      <div className="mapScreen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.0310602465356!2d-112.58478298496215!3d33.39635385945525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b35049806aed5%3A0xe3f3728df19b3826!2s24710%20W%20Dove%20Trail%2C%20Buckeye%2C%20AZ%2085326!5e0!3m2!1sen!2sus!4v1630614221492!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
