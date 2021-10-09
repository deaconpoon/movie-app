import { MoviesList } from "../";
import styled from "styled-components";

const Container = styled.div`
  width: 10vw;
  height: 20vh;
  background-color: lightblue;

  display: inline-flex;
  flex-direction: column;
`; //

const HomePage = () => {
  return (
    <>
      <Container>movies</Container>
      <Container>series</Container>
    </>
  );
};
export default HomePage;
