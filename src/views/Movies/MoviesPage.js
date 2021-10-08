import { useState } from "react";
import { MovieCard, DetailModal } from "../../components/layout";

const MoviesPage = ({ moviesList, getFunFact }) => {
  return (
    <>
      {moviesList.entries.map((entry) => (
        <MovieCard
          title={entry.title}
          image={entry.images["Poster Art"].url}
        ></MovieCard>
      ))}
      <DetailModal isOpen={false}></DetailModal>
    </>
  );
};
export default MoviesPage;
