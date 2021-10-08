import { useEffect, useState } from "react";
import { MoviesPage } from "..";
import { MovieCard } from "../../components/layout";
import MovieList from "../../utils/sample.json";

const HomePage = () => {
  const loadedMovieList = JSON.stringify(MovieList);
  const [movieList, setMovieList] = useState(JSON.parse(loadedMovieList));

  console.log(movieList);

  return (
    <div>
      {/* <MovieCard /> */}

      {movieList.entries.map((entry) => (
        <MovieCard
          title={entry.title}
          image={entry.images["Poster Art"].url}
        ></MovieCard>
      ))}
    </div>
  );
};
export default HomePage;
