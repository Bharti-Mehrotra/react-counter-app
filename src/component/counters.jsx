import React from "react";
import Counter from "./counter";
import {useDispatch, useSelector} from 'react-redux'
import { toggleColor } from "../features/changeColorSlice";
import { addCounter } from "../features/counterSlice";
const Counters = (
) => {
  const counters = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>{dispatch(addCounter())}} className="btn btn-primary btn-sm m-2">
        Add Counter
      </button>

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
        />
      ))}

      {/* <button onClick={onChangeColor} className="btn btn-primary btn-sm m-2">
        Change Navbar Color
      </button> */}

      <button
        onClick={() => {
          dispatch(toggleColor())
        }}
        className="btn btn-primary btn-sm m-2"
      >
        Change Color
      </button>
    </div>
  );
};

export default Counters;
