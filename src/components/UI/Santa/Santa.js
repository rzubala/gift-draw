import React from "react";

import "./Santa.css";

const Santa = (props) => {
  return (
    <div className="santa">
      <div className="circles"></div>
      <div className="snow"></div>
      <div className="hat">
        <div className="hat-end"></div>
      </div>
      <div className="face">
        <div className="eyes"></div>
        <div className="mouth"></div>
      </div>
      <div className="dirty-overflow">
        <div className="body"></div>
      </div>
    </div>
  );
};

export default Santa
