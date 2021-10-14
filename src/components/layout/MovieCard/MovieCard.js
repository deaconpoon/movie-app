import styled from "styled-components";
import { useDispatch } from "react-redux";
import { select } from "../../../store/reducer/moviesReducer";
import { getFunFact } from "../../../store/reducer/funFactReducer";
import { toggleIsOpen } from "../../../store/reducer/detailModalReducer";

const Container = styled.li`
  display: inline-flex;
  flex-direction: column;
  border-radius: 1em;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  :hover {
    cursor: pointer;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.05),
      0 6.7px 5.3px rgba(0, 0, 0, 0.078), 0 12.5px 10px rgba(0, 0, 0, 0.12),
      0 22.3px 17.9px rgba(0, 0, 0, 0.082), 0 41.8px 33.4px rgba(0, 0, 0, 0.096),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
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
    <Container
      data-testid="movie-card"
      key={id}
      onClick={() => handleSelectedMovie(id, releaseYear)}
    >
      <Image data-testid="movie-card-image" src={image}></Image>
      <SubTitle data-testid="movie-card-title">{title}</SubTitle>
    </Container>
  );
};
export default MovieCard;
