import "./App.css";
import React, { Component } from "react";
import Counters from "./component/counters";
import NavBar from "./component/navBar";
class App extends Component {
  // constructor() {
  //   super();
  //   console.log("App - Constructor");
  // }
  // componentDidMount() {
  //   console.log("App - componentDidMount");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("App - componentDidUpdate");
  //   console.log("prevProps - ", prevProps);
  //   console.log("prevState - ", prevState);
  // }
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const newCounter = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounter });
  };

  handleIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    console.log(counter);
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    // console.log("App - Render");
    return (
      <React.Fragment>
        <NavBar
          counterCount={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
