import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer, DetailModal } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage } from "./views";
import { sort, select } from "./store/reducer/moviesReducer";
import { getFunFact } from "./store/reducer/funFactReducer";

function App() {
  const dispatch = useDispatch();
  const baseURL = "http://numbersapi.com/";

  const movies = useSelector((state) => state.movies.moviesList);
  const sortedMovies = movies.filter(
    ({ programType }) => programType === "movie"
  );
  const sortedSeries = movies.filter(
    ({ programType }) => programType === "series"
  );
  const [year, setYear] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sortedMoviesList, setSortedMoviesList] = useState(null);
  const [sortedSeriesList, setSortedSeriesList] = useState(null);
  const funFact = useSelector((state) => state.funFact);

  function sortList(type) {
    dispatch(sort(type));
  }
  function selectMovie(movie) {
    dispatch(select(movie));
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
  /*   const handleSelectedMovie = (e, movie) => {
    e.preventDefault();
    setSelectedMovie(movie);
  };
 */
  /*   useEffect(() => {
    sortList("movie");
    setSortedMoviesList(movies.filteredMoviesList);
    sortList("series");
    setSortedSeriesList(movies.filteredMoviesList);
  }, []);
 */
  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App layout">
            <Header />
            <button onClick={() => sortList("series")}>click me</button>
            <Switch>
              <main className="grid">
                <Route path="/404">
                  <ErrorPage />
                </Route>
                <Route
                  exact
                  path="/movies"
                  render={() => <MoviesPage moviesList={sortedMovies} />}
                />
                <Route
                  exact
                  path="/series"
                  render={() => <MoviesPage moviesList={sortedSeries} />}
                />

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
