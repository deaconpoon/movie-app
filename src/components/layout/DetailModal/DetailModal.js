import ReactModal from "react-modal";
import styled from "styled-components";
import { useSelector, getState } from "react-redux";
import { useEffect } from "react";

import store from "../../../store";

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

const DetailModal = (
  {
    /*   title,
  description,
  programType,
  images,
  funFact,
  isOpen,
  releaseYear, */
  }
) => {
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const { title, description, programType, images, releaseYear } =
    selectedMovie[0];
  const funFact = useSelector((state) => state.funFact.funFact);
  const isOpen = useSelector((state) => state.detailModal.isOpen);

  const handleGetState = () => {
    const state = store.getState();
    console.log(state);

    //write a useeffect
  };
  return (
    <ReactModal isOpen={isOpen}>
      <Container>
        <Image /* src={image} */></Image>
        <div>
          <h2>{title}</h2>
          <p>{releaseYear}</p>
          <p>{funFact}</p>
          <p>{description}</p>
          <button onClick={handleGetState}>check redux state</button>
        </div>
      </Container>
    </ReactModal>
  );
};
export default DetailModal;
