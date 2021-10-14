import React from "react";
import { Link, useHistory } from "react-router-dom";
import movie from "../../../asset/movie.svg";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <img
        data-testId="logo"
        className="logo"
        onClick={() => history.push("/")}
        src={movie}
      />
      <div>
        <Link
          data-testId="header-movie-link"
          className="movieLink"
          to="/movies"
        >
          Movie
        </Link>
        <Link
          data-testId="header-series-link"
          className="movieLink"
          to="/series"
        >
          Series
        </Link>
      </div>
    </header>
  );
};
export default Header;
