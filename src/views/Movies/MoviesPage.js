import { MovieCard, DetailModal } from "../../components/layout";

const MoviesPage = ({ moviesList }) => {
  return (
    <>
      {moviesList.map(({ title, images, id, releaseYear }) => (
        <MovieCard
          id={id}
          title={title}
          image={images["Poster Art"].url}
          releaseYear={releaseYear}
        ></MovieCard>
      ))}
    </>
  );
};
export default MoviesPage;
