import React from "react";
import { Link, useHistory } from "react-router-dom";
import movie from "../../../asset/movie.svg";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <img className="logo" onClick={() => history.push("/")} src={movie} />
      <div>
        <Link to="/movies">movie</Link>
        <Link to="/series">series</Link>
      </div>
    </header>
  );
};
export default Header;
