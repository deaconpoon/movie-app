import { MovieCard } from "../../components/layout";

const MoviesPage = ({ moviesList }) => {
  return (
    <>
      {moviesList.entries.map((entry) => (
        <>
          <MovieCard
            title={entry.title}
            image={entry.images["Poster Art"].url}
          ></MovieCard>
        </>
      ))}
    </>
  );
};
export default MoviesPage;
