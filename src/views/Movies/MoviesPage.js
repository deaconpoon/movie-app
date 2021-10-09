import { MovieCard, DetailModal } from "../../components/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MoviesPage = ({ moviesList }) => {
  return (
    <>
      {moviesList.map(({ title, images, id }) => (
        <MovieCard
          id={id}
          title={title}
          image={images["Poster Art"].url}
        ></MovieCard>
      ))}
      <div>movie</div>
    </>
  );
};
export default MoviesPage;
