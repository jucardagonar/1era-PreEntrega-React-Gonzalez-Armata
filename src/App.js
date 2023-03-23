import React, { Component } from "react";
import "../src/App.css";
import Header from "../src/components/Header/Header";
import NavBar from "../src/components/NavBar/NavBar";

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
