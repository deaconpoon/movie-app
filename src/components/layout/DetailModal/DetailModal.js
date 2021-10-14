import ReactModal from "react-modal";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DetailModal = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const {
    title,
    description,
    programType,
    releaseYear,
    images: {
      "Poster Art": { url: image },
    },
  } = selectedMovie[0];
  const funFact = useSelector((state) => state.funFact.funFact);
  const funFactStatus = useSelector((state) => state.funFact.status);
  const isOpen = useSelector((state) => state.detailModal.isOpen);

  return (
    <ReactModal isOpen={isOpen}>
      <Container data-testId="movie-modal">
        <Image
          aria-label="Movie's image"
          data-testId="movie-modal-image"
          src={image}
        ></Image>
        <div>
          <h2 aria-label="Movie's title" data-testId="movie-modal-title">
            {title}
          </h2>
          <p
            aria-label="Movie's release date"
            data-testId="movie-modal-releaseDate"
          >
            <span>Release Date: </span>
            <br />
            {releaseYear}
          </p>
          <p
            aria-label="Movie's fun fact"
            data-testId="movie-modal-funFact"
            className={`${funFactStatus === "failed" ? "hide" : ""}`}
          >
            <span>Movie Fact Fun: </span>
            <br />
            {(funFactStatus === "loading" && "Loading funFact") || funFact}
          </p>
          <p
            aria-label="Movie's program type"
            data-testId="movie-modal-programType"
            className="capitalize"
          >
            <span>Program type: </span>
            <br />
            {programType}
          </p>
          <p
            aria-label="Movie's description"
            data-testId="movie-modal-description"
          >
            <span>Description: </span>
            <br />
            {description}
          </p>

          <button
            aria-label="Close movie modal button"
            data-testId="movie-modal-button-close"
            style={{ marginBottom: "1em" }}
            onClick={() => dispatch(toggleIsOpen(isOpen))}
          >
            Close modal
          </button>
        </div>
      </Container>
    </ReactModal>
  );
};
export default DetailModal;
