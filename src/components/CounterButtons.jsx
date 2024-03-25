import React from "react";
import ReactDOM from "react-dom";

class CounterButtons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onIncrement()}>
          +
        </button>
        <button onClick={() => this.props.onDecrement()}>
          -
        </button>
      </div>
    );
  }
}

export default CounterButtons;