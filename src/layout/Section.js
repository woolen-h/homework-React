import React from "react";
import "../style/index.css";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
