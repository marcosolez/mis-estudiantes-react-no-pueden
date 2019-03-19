import React, { Component } from "react";

class Contador extends Component {
  state = {
    value: this.props.value
  };

  handlerIncrementar = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let clases = "badge m-2 badge-";
    clases += this.state.value === 0 ? "warning" : "info";
    return (
      <div>
        <br />
        <span className={clases}>{this.formatContador()}</span>
        <button
          onClick={() => this.handlerIncrementar()}
          className="btn btn-primary btn-xs m-2"
        >
          Incrementar
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-xs">
          Eliminar
        </button>
      </div>
    );
  }
  formatContador() {
    const { value } = this.state;
    return value === 0 ? "ZERO" : value;
  }
}

export default Contador;
