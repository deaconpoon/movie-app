import React from "react";
import { Link, useHistory } from "react-router-dom";
import movie from "../../../asset/movie.svg";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <img
        aria-label="Header's logo"
        alt="logo"
        data-testid="logo"
        className="logo"
        onClick={() => history.push("/")}
        src={movie}
      />
      <div>
        <Link
          aria-label="Link to movie page"
          data-testid="header-movie-link"
          className="movieLink"
          to="/movies"
        >
          Movie
        </Link>
        <Link
          aria-label="Link to series page"
          data-testid="header-series-link"
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
