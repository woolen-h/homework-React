import React, { useState, useEffect, useCallback } from "react";
import PocketBase from "pocketbase";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import AddButton from "@/components/AddButton";
import Nav from "@/components/Nav";
import TodoList from "@/components/TodoList";
import _ from "lodash";

const url = "https://todays-todo-list.pockethost.io/";
const client = new PocketBase(url);

function Layout() {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(
    _.debounce(async (filter) => {
      try {
        const records = await client.collection("todolist").getFullList(200, {
          sort: "-created",
        });
        setTodos(records);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchTodos(filter);
  }, [filter, fetchTodos]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="Layout">
      <Logo />
      <Title />
      <AddButton onAdd={addTodo} />
      <Nav currentFilter={filter} setFilter={setFilter} todos={todos} />
      <TodoList currentFilter={filter} todos={todos} />
    </div>
  );
}

export default Layout;
