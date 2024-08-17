import React from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";
import AddButton from "../components/AddButton";
import Nav from "../components/Nav";
import Todo from "../components/Todo";
import "../style/index.css";

function Layout() {
  return (
    <div className="Layout">
      <Logo />
      <Title />
      <AddButton />
      <Nav />
      <Todo />
    </div>
  );
}

export default Layout;
