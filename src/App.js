import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main.js";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
