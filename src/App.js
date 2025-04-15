import "./App.css";
import React, { useState } from "react";
import Counters from "./component/counters";
import NavBar from "./component/navBar";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 2 },
    { id: 4, value: 0 },
  ]);

  const [navColorState, setNavColorState] = useState(
    "navbar navbar-light bg-light"
  );

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counter) => {
    const newCounters = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    );
    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value - 1 } : c
    );
    setCounters(newCounters);
  };

  const handleReset = () => {
    const resetCounters = counters.map((c) => ({ ...c, value: 0 }));
    setCounters(resetCounters);
  };

  const onChangeColor = () => {
    const newColor =
      navColorState === "navbar navbar-light bg-dark"
        ? "navbar navbar-light bg-light"
        : "navbar navbar-light bg-dark";
    setNavColorState(newColor);
  };

  return (
    <>
      <NavBar
        counterCount={counters.filter((c) => c.value > 0).length}
        navClass={navColorState}
      />
      <Counters
      />
    </>
  );
};

export default App;
