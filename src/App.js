import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer, DetailModal } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage } from "./views";
import { sortProgramType } from "./store/reducer/moviesReducer";
import { getFunFact } from "./store/reducer/funFactReducer";

function App() {
  const dispatch = useDispatch();
  const baseURL = "http://numbersapi.com/";
  const [year, setYear] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const movies = useSelector((state) => state.movies);
  const funFact = useSelector((state) => state.funFact);

  /*   const sortList = (type) =>
    movies.moviesList.filter(({ programType }) => programType === type); */

  function sortList(type) {
    dispatch(sortProgramType(type));
    console.log(movies.moviesList);
  }

  /*   const getFunFact = (num) => {
    axios.get(`${baseURL + num}/year`).then((response) => response.data);
  }; */

  /*   const handleFunFact = () => {
    dispatch(getFunFact);
    console.log(funFact);
  }; */

  const handleFunFact = (num) => {
    setYear(num);
    return axios.get(`${baseURL + num}/year`).then((response) => response.data);
  };
  const handleSelectedMovie = (e, movie) => {
    e.preventDefault();
    setSelectedMovie(movie);
  };

  /*   useEffect(() => handleSelectedMovie, [selectedMovie]); */

  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App layout">
            <Header />
            <button onClick={() => sortList("movie")}>click me</button>
            <Switch>
              <main className="grid">
                <Route path="/404">
                  <ErrorPage />
                </Route>
                {/* <Route
                  exact
                  path="/movies"
                  render={() => (
                    <MoviesPage
                      handleSelectedMovie={handleSelectedMovie}
                      moviesList={sortList("movie")}
                    />
                  )}
                /> */}
                {/*  <Route
                  exact
                  path="/series"
                  render={() => (
                    <MoviesPage
                      handleSelectedMovie={handleSelectedMovie}
                      moviesList={sortList("series")}
                    />
                  )}
                /> */}

                <Route exact path="/">
                  <HomePage />
                </Route>
              </main>
            </Switch>
            <Footer />
            <DetailModal />
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
