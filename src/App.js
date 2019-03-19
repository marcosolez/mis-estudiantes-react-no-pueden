import React, { Component } from "react";
import Nav from "./components/nav";
import Contadores from "./components/contadores";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
          <Contadores />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
