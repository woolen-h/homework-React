import React from "react";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import AddButton from "@/components/AddButton";
import Nav from "@/components/Nav";
import TodoList from "@/components/Todolist";
import "../style/index.css";

function Layout() {
  return (
    <div className="Layout">
      <Logo />
      <Title />
      <AddButton />
      <Nav />
      <TodoList />
    </div>
  );
}

export default Layout;
