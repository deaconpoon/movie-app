import { MovieCard, DetailModal } from "../../components/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MoviesPage = ({ moviesList, handleSelectedMovie }) => {
  return (
    <>
      {moviesList.map((entry) => (
        <MovieCard
          onClick={(e) => handleSelectedMovie(e, entry)}
          title={entry.title}
          image={entry.images["Poster Art"].url}
        ></MovieCard>
      ))}
    </>
  );
};
export default MoviesPage;
