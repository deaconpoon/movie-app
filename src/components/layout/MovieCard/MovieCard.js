import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../../store/reducer/moviesReducer";
import { getFunFact } from "../../../store/reducer/funFactReducer";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";
/* import { Card, Image } from "semantic-ui-react"; */

const Container = styled.li`
  /*   width: 30vw; */
  /*   height: 20vh; */
  background-color: lightblue;

  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MovieCard = ({ image, title, id, releaseYear }) => {
  const dispatch = useDispatch();
  const detailModalisOpen = useSelector((state) => state.detailModal.isOpen);

  //move to helper func
  const handleSelectedMovie = (id, releaseYear) => {
    dispatch(select(id));
    dispatch(getFunFact(releaseYear));
    console.log(releaseYear);
    dispatch(toggleIsOpen());
  };

  return (
    <Container key={id} onClick={() => handleSelectedMovie(id, releaseYear)}>
      <Image src={image}></Image>
      <h4>{title}</h4>
    </Container>
  );
};
export default MovieCard;
