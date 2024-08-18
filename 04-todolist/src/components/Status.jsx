import React from "react";

function Status({ todos, filter }) {
  console.log("Status rendering with filter:", filter, "and todos:", todos);

  const count = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "todo") return !todo.isCompleted;
    if (filter === "done") return todo.isCompleted;
    if (filter === "archive") return todo.archive;
    return false;
  }).length;

  console.log("Count for filter", filter, ":", count);

  return <span className="status__container">{count}</span>;
}

export default Status;
