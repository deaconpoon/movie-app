import ReactModal from "react-modal";
import styled from "styled-components";
/* import { Button, Header, Image, Modal } from "semantic-ui-react"; */
import { useSelector, useDispatch } from "react-redux";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";
import { MovieCard } from "../";

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
      ["Poster Art"]: { url: image },
    },
  } = selectedMovie[0];
  const funFact = useSelector((state) => state.funFact.funFact);
  const funFactStatus = useSelector((state) => state.funFact.status);
  const isOpen = useSelector((state) => state.detailModal.isOpen);

  return (
    <ReactModal isOpen={isOpen}>
      <Container data-testId="movie-modal">
        <Image data-testId="movie-modal-image" src={image}></Image>
        <div>
          <h2 data-testId="movie-modal-title">{title}</h2>
          <p data-testId="movie-modal-releaseDate">
            <span>Release Date: </span>
            <br />
            {releaseYear}
          </p>
          <p
            data-testId="movie-modal-funFact"
            className={`${funFactStatus === "failed" ? "hide" : ""}`}
          >
            <span>Movie Fact Fun: </span>
            <br />
            {(funFactStatus === "loading" && "Loading funFact") || funFact}
          </p>
          <p data-testId="movie-modal-programType" className="capitalize">
            <span>Program type: </span>
            <br />
            {programType}
          </p>
          <p data-testId="movie-modal-description">
            <span>Description: </span>
            <br />
            {description}
          </p>

          <button
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
