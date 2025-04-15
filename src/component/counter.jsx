import React, { Component } from "react";
import { increment, decrement, removeCounter } from "../features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = (props) => {
  const {id,counter} = props
    const dispatch = useDispatch();

    return (
      <div className="row">
        {/* <div className="col-1">
          <span className="m-2">counter# {this.props.counter.id}</span>
        </div> */}
        <div className="col-1">
          <span className={getBadgeClasses(counter.value)}>{formatCount(counter.value)}</span>
        </div>
        <div className="col">
          <button
            onClick={()=> {dispatch(increment(counter.id))}}
            className="btn btn-secondary m-2"
          >
            +
          </button>
          <button
            onClick={()=> {dispatch(decrement(counter.id))}}
            className="btn btn-secondary m-2"
            disabled={counter.value > 0 ? false : true}
          >
            -
          </button>
          <button
            onClick={() => dispatch(removeCounter(counter.id))}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
          </div>
      </div>
    );
}
  function getBadgeClasses(count) {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  function formatCount(count) {
    return count === 0 ? "Zero" : count;
  }


export default Counter;
