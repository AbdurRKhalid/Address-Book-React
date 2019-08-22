import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Jumbotron from "./Components/Jumbotron";
import Table from "./Components/Table";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Form />
      <Table />
    </div>
  );
}

export default App;
