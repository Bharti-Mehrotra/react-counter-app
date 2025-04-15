import React from "react";
import { useSelector } from "react-redux";

//stateless functional components
const NavBar = (props) => {
  const { counterCount, navClass } = props;
  const color = useSelector(state => state.colorClassReducer.value)

  return (
    <nav className= {color}>
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {counterCount}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
