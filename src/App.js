import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer, DetailModal } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage } from "./views";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  const sortedMovies = movies.filter(
    ({ programType }) => programType === "movie"
  );
  const sortedSeries = movies.filter(
    ({ programType }) => programType === "series"
  );

  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App layout">
            <Header />
            <Switch>
              <main className="grid">
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

                <Route exact path="/" component={HomePage} />
                <Route path="*">
                  <ErrorPage />
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
