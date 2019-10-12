import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class BB extends Component {
  constructor() {
    console.log("constructor");
    this.state = {
      name: "State"
    };
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>BB </h1>
        <h4>Props: {this.props.name}</h4>
        <h4>State: {this.state.name}</h4>
        <button onClick={e => this.setState({ name: this.state.name + 1 })}>
          Change State
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate",
      "prevProps",
      prevProps,
      "props",
      this.props,
      "prevState",
      prevState,
      "state",
      this.state,
      "snapshot",
      snapshot
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      "nextProps",
      nextProps,
      "nextState",
      nextState
    );
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "getDerivedStateFromProps",
      // "this.props",
      // this.props,
      // "this.state",
      // this.state,
      "props",
      props,
      "state",
      state
    );
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate",
      "prevProps",
      prevProps,
      "props",
      this.props,
      "prevState",
      prevState,
      "state",
      this.state
    );
    return null;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Prop",
      mount: true,
      count: 1
    };
  }

  render() {
    return (
      <div>
        {this.state.mount && <BB name={this.state.name} />}
        <button
          onClick={e =>
            this.setState({
              name: this.state.name + " " + this.state.count,
              count: this.state.count + 1
            })
          }
        >
          Chnage Props
        </button>
        <button
          onClick={e =>
            this.setState({
              mount: !this.state.mount
            })
          }
        >
          Toggle Mount
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
