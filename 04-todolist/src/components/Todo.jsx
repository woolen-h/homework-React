import React from "react";

function Todo({
  id,
  title,
  description,
  startTime,
  endTime,
  isCompleted,
  isArchived,
  onToggle,
  onArchive,
}) {
  const uniqueId = `todoCheckbox-${id}`;

  return (
    <div
      className={`todo ${isArchived ? "archived" : ""} ${
        isCompleted ? "completed" : ""
      }`}
    >
      <ul className="todo__container">
        <li>
          <h1 className="todo__title">
            <span>{title}</span>
            <span className="checkbox">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={onToggle}
                id={uniqueId}
              />
              <label htmlFor={uniqueId}></label>
            </span>
          </h1>
          <p className="todo__disc">{description}</p>
          <p className="divider"></p>
          <p className="todo__time">
            <span>
              {startTime} - {endTime}
            </span>
            <button
              className="button__archive"
              type="button"
              onClick={onArchive}
            >
              {isArchived ? (
                <span className="icon icon__archive"></span>
              ) : (
                <span className="icon icon__unarchive"></span>
              )}
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Todo;
