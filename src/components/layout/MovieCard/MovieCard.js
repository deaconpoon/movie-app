import styled from "styled-components";
import { useDispatch } from "react-redux";
import { select } from "../../../store/reducer/moviesReducer";
import { getFunFact } from "../../../store/reducer/funFactReducer";

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

const MovieCard = ({ image, title, id, releaseYear }) => {
  const dispatch = useDispatch();

  const handleSelectedMovie = (id, releaseYear) => {
    dispatch(select(id));
    console.log(id);
    dispatch(getFunFact(releaseYear));
    console.log(releaseYear);
  };

  return (
    <Container key={id}>
      <Image src={image}></Image>
      <p>{title}</p>
      <button onClick={() => handleSelectedMovie(id, releaseYear)}>
        clickme
      </button>
    </Container>
  );
};
export default MovieCard;
