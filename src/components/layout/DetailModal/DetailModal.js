import ReactModal from "react-modal";
import styled from "styled-components";
/* import { Button, Header, Image, Modal } from "semantic-ui-react"; */
import { useSelector, useDispatch } from "react-redux";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";
import { MovieCard } from "../";

const Container = styled.div`
  width: 100%;
  height: 50%;
  background-color: lightblue;

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
      <Container>
        <Image src={image}></Image>
        <div>
          <h2>{title}</h2>

          {/*        <p>{`Release date: ${releaseYear}`}</p> */}
          <p>
            <span>Release date: </span>
            <br />
            {releaseYear}
          </p>

          {/*           <p>{`Fun fact: ${
            (funFactStatus === "loading" && "Loading funFact") ||
            (funFactStatus === "failed" && "failed funFact") ||
            funFact
          }`}</p> */}
          <p className={`${funFactStatus === "failed" ? "hide" : ""}`}>
            <span>Movie fact fun: </span>
            <br />
            {(funFactStatus === "loading" && "Loading funFact") || funFact}
          </p>
          <p>{programType}</p>
          <p>{description}</p>
          <button onClick={() => dispatch(toggleIsOpen(isOpen))}>
            Close modal
          </button>
        </div>
      </Container>
    </ReactModal>
  );
};
export default DetailModal;
