import React, { useState } from "react";

function Todo({ title, description, time, isCompleted, onArchive }) {
  const [checked, setChecked] = useState(isCompleted);

  return (
    <div className="todo">
      <ul className="todo__container">
        <li>
          <h1 className="todo__title">
            <span>{title}</span>
            <span>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </span>
          </h1>
          <p className="todo__disc">{description}</p>
          <p className="divider"></p>
          <p className="todo__time">
            <span>{time}</span>
            <button
              className="button__archive"
              type="button"
              onClick={onArchive}
            >
              <span className="icon__archive"></span>
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Todo;
