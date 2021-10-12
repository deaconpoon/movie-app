import { MoviesList } from "../";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

const Container = styled.li`
  width: 10vw;
  height: 20vh;
  background-color: lightblue;
  display: inline-flex;
  flex-direction: column;
`; //

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <Container onClick={() => history.push("movies")}>Movies</Container>
      <Container onClick={() => history.push("series")}>Series</Container>
    </>
  );
};
export default HomePage;
