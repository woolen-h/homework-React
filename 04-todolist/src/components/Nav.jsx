import React from "react";
import Status from "./Status";

function Nav({ currentFilter, setFilter, todos }) {
  console.log("Nav todos:", todos);

  return (
    <ul className="nav">
      <li
        className={`nav__filter ${currentFilter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        모두
        <Status todos={todos} filter="all" />
      </li>
      <li
        className={`nav__filter ${currentFilter === "todo" ? "active" : ""}`}
        onClick={() => setFilter("todo")}
      >
        할일
        <Status todos={todos} filter="todo" />
      </li>
      <li
        className={`nav__filter ${currentFilter === "done" ? "active" : ""}`}
        onClick={() => setFilter("done")}
      >
        한일
        <Status todos={todos} filter="done" />
      </li>
      <li
        className={`nav__filter ${currentFilter === "archive" ? "active" : ""}`}
        onClick={() => setFilter("archive")}
      >
        보관
        <Status todos={todos} filter="archive" />
      </li>
    </ul>
  );
}

export default Nav;
