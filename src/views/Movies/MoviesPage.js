import { MovieCard } from "../../components/layout";

const MoviesPage = ({ moviesList }) => {
  return (
    <>
      <ul className="grid">
        {moviesList.map(({ title, images, id, releaseYear }) => (
          <MovieCard
            key={id}
            id={id}
            title={title}
            image={images["Poster Art"].url}
            releaseYear={releaseYear}
          ></MovieCard>
        ))}
      </ul>
    </>
  );
};
export default MoviesPage;
