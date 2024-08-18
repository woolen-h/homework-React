import React, { useState, useEffect } from "react";
import PocketBase from "pocketbase";
import Todo from "./Todo";

const url = "https://todays-todo-list.pockethost.io/";
const client = new PocketBase(url);

function TodoList({ currentFilter }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const records = await client.collection("todolist").getFullList(200, {
          sort: "-created",
        });
        setTodos(records);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }

    fetchTodos();
  }, []);

  const filteredTodos = todos
    .filter((todo) => {
      if (currentFilter === "all") return true;
      if (currentFilter === "todo") return !todo.isCompleted;
      if (currentFilter === "done") return todo.isCompleted;
      if (currentFilter === "archive") return todo.archive;
      return false;
    })
    .sort((a, b) => {
      if (currentFilter === "all") {
        if (a.isCompleted && !b.isCompleted) return 1;
        if (!a.isCompleted && b.isCompleted) return -1;
      }
      return 0;
    });

  const toggleTodo = async (id) => {
    try {
      const updatedTodo = todos.find((todo) => todo.id === id);
      if (!updatedTodo) return;

      updatedTodo.isCompleted = !updatedTodo.isCompleted;

      // 보관 상태도 업데이트
      if (!updatedTodo.isCompleted) {
        updatedTodo.archive = false;
      }

      // 서버 업데이트
      await client.collection("todolist").update(id, {
        isCompleted: updatedTodo.isCompleted,
        archive: updatedTodo.archive,
      });

      // 로컬 상태 업데이트
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                isCompleted: updatedTodo.isCompleted,
                archive: updatedTodo.archive,
              }
            : todo
        )
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const toggleArchive = async (id) => {
    try {
      const updatedTodo = todos.find((todo) => todo.id === id);
      if (!updatedTodo) return;

      updatedTodo.archive = !updatedTodo.archive;

      if (updatedTodo.archive) {
        updatedTodo.isCompleted = true;
      }

      await client.collection("todolist").update(id, {
        archive: updatedTodo.archive,
        isCompleted: updatedTodo.isCompleted,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                archive: updatedTodo.archive,
                isCompleted: updatedTodo.isCompleted,
              }
            : todo
        )
      );
    } catch (error) {
      console.error("Failed to toggle archive status:", error);
    }
  };

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            startTime={todo.startTime}
            endTime={todo.endTime}
            isCompleted={todo.isCompleted}
            isArchived={todo.archive}
            onToggle={() => toggleTodo(todo.id)}
            onArchive={() => toggleArchive(todo.id)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
