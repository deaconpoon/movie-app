import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../../store/reducer/moviesReducer";
import { getFunFact } from "../../../store/reducer/funFactReducer";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";

const Container = styled.li`
  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 320px;
  }
`;
const SubTitle = styled.h4`
  text-align: center;
`;

const MovieCard = ({ image, title, id, releaseYear }) => {
  const dispatch = useDispatch();

  //move to helper func
  const handleSelectedMovie = (id, releaseYear) => {
    dispatch(select(id));
    dispatch(getFunFact(releaseYear));
    dispatch(toggleIsOpen());
  };

  return (
    <Container key={id} onClick={() => handleSelectedMovie(id, releaseYear)}>
      <Image src={image}></Image>
      <SubTitle>{title}</SubTitle>
    </Container>
  );
};
export default MovieCard;
