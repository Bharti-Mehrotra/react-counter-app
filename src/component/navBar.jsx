import React from "react";

//stateless functional components
const NavBar = (props) => {
  const { counterCount } = props;
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
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
