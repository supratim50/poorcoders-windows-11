import React from "react";

//CSS
import "./ImagesIcon.css";

const ImagesIcon = ({ icon, handleCLick }) => {
  return (
    <div className="imageBox" onClick={handleCLick && handleCLick}>
      <img className="image" src={icon && icon} />
    </div>
  );
};

export default ImagesIcon;
