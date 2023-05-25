import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
