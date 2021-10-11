import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../../store/reducer/moviesReducer";
import { getFunFact } from "../../../store/reducer/funFactReducer";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";

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
  const detailModalisOpen = useSelector((state) => state.detailModal.isOpen);

  //move to helper func
  const handleSelectedMovie = (id, releaseYear) => {
    dispatch(select(id));
    dispatch(getFunFact(releaseYear));
    dispatch(toggleIsOpen());
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
