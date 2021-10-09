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

const MovieCard = ({ image, title, movie }) => {
  const dispatch = useDispatch();

  function selectMovie(movie) {
    dispatch(select(movie));
  }
  const handleSelectedMovie = (e, movie) => {
    selectMovie(movie);
    console.log("clicked");
  };

  return (
    <Container>
      <Image src={image}></Image>
      <p>{title}</p>
    </Container>
  );
};
export default MovieCard;
