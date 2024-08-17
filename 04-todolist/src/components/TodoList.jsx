import React from "react";
import Todo from "./Todo";

function TodoList() {
  const todos = [
    {
      title: "동네 주민 모임",
      description: "동네 주민 정기 모임일. 저녁 식사 후, 모임 회의 가질 예정.",
      time: "오늘 오후 07:00 - 09:30",
      isCompleted: false,
    },
  ];

  const handleArchive = () => {
    console.log("Archive clicked!");
  };

  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          time={todo.time}
          isCompleted={todo.isCompleted}
          onArchive={handleArchive}
        />
      ))}
    </>
  );
}

export default TodoList;
