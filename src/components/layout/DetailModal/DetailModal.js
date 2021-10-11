import ReactModal from "react-modal";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";

const Container = styled.div`
  width: 100%;
  height: 50%;
  background-color: lightblue;

  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
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
  const isOpen = useSelector((state) => state.detailModal.isOpen);

  return (
    <ReactModal isOpen={isOpen}>
      <Container>
        <Image src={image}></Image>
        <div>
          <h2>{title}</h2>
          <p>{"released in " + releaseYear}</p>
          <p>{funFact}</p>
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
