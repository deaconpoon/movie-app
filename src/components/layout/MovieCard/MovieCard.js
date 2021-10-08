import styled from "styled-components";

const Container = styled.div`
  width: 10vw;
  height: 20vh;
  background-color: lightblue;

  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
`;

const MovieCard = ({ image, title }) => (
  <Container>
    <Image src={image}></Image>

    <p>{title}</p>
  </Container>
);
export default MovieCard;
