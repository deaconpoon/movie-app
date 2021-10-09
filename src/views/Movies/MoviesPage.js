import { MovieCard, DetailModal } from "../../components/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MoviesPage = ({ moviesList }) => {
  return (
    <>
      {moviesList.map((movie) => (
        <MovieCard
          movie={movie}
          title={movie.title}
          image={movie.images["Poster Art"].url}
        ></MovieCard>
      ))}
      <div>movie</div>
    </>
  );
};
export default MoviesPage;
