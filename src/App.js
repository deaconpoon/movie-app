import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer, DetailModal } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage } from "./views";

function App() {
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
          <div className="layout">
            <Header />
            <main className="body">
              <Switch>
                <Route exact path="/" component={HomePage} />
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
                <Route component={ErrorPage} />
              </Switch>
            </main>
            {/*        <Footer /> */}
            <DetailModal />
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
