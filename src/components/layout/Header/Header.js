import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>header</div>
      <div>
        <Link to="/movies">movie</Link>
        <Link to="/series">series</Link>
      </div>
    </header>
  );
};
export default Header;
