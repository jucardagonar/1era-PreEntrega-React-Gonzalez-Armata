import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header title="HOLA" subTitle="HOLA" />
      </div>
    );
  }
}
export default App;
