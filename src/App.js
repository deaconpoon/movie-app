import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer, DetailModal } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage } from "./views";
import { getFunFact } from "./store/reducer/funFactReducer";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  const sortedMovies = movies.filter(
    ({ programType }) => programType === "movie"
  );
  const sortedSeries = movies.filter(
    ({ programType }) => programType === "series"
  );
  /*   const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const { title, description, programType, images, releaseYear } =
    selectedMovie;
  const funFact = useSelector((state) => state.funFact.funFact);
  const isOpen = useSelector((state) => state.detailModal.isOpen);
 */
  function handleFunFact(year) {
    const funFact = dispatch(getFunFact(year));
    console.log(funFact);
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App layout">
            <Header />
            <button onClick={() => handleFunFact("1988")}>click me</button>

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
            <DetailModal
            /*  title={title}
              description={description}
              programType={programType}
              images={images}
              funFact={funFact}
              isOpen={isOpen}
              releaseYear={releaseYear} */
            />
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
