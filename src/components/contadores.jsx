import React, { Component } from "react";
import Contador from "./counter";

class Contadores extends Component {
  state = {
    contadores: [
      { id: 1, value: 8 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 2 }
    ]
  };
  handlerDelete = id => {
    console.log("Dio Click");
    const contadores = this.state.contadores.filter(c => c.id !== id);
    this.setState({ contadores });
  };

  render() {
    return (
      <div>
        {this.state.contadores.map(contador => (
          <Contador
            onDelete={() => this.handlerDelete(contador.id)}
            key={contador.id}
            value={contador.value}
          />
        ))}
      </div>
    );
  }
}

export default Contadores;
