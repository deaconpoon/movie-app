import styled from "styled-components";
import { useDispatch } from "react-redux";
import { select } from "../../../store/reducer/moviesReducer";
import { useDebugValue } from "react";

const Container = styled.li`
  width: 10vw;
  height: 20vh;
  background-color: lightblue;

  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
`;

const MovieCard = ({ image, title, id }) => {
  const dispatch = useDispatch();

  function selectMovie(id) {
    dispatch(select(id));
  }
  const handleSelectedMovie = (id) => {
    selectMovie(id);
    console.log("clicked");
  };

  return (
    <Container key={id}>
      <Image src={image}></Image>
      <p>{title}</p>
      <button onClick={() => handleSelectedMovie(id)}>clickme</button>
    </Container>
  );
};
export default MovieCard;
