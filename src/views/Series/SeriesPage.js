import { MovieCard, DetailModal } from "../../components/layout";

const SeriesPage = ({ moviesList, getFunFact }) => {
  console.log(moviesList);
  return (
    <>
      {/* {moviesList.entries.map((entry) => (
        <MovieCard
          title={entry.title}
          image={entry.images["Poster Art"].url}
        ></MovieCard>
      ))} */}
      <DetailModal isOpen={false}></DetailModal>
    </>
  );
};
export default SeriesPage;
