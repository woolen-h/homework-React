import React from "react";
import Status from "./Status";

function Nav() {
  return (
    <ul className="nav">
      <li className="nav__filter">
        모두
        <Status />
      </li>
      <li className="nav__filter">
        할일
        <Status />
      </li>
      <li className="nav__filter">
        한일
        <Status />
      </li>
      <li className="nav__filter">
        보관
        <Status />
      </li>
    </ul>
  );
}

export default Nav;
