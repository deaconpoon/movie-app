import { ThemeProvider } from "styled-components";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage, SeriesPage } from "./views";
import MoviesList from "./utils/sample.json";

function App() {
  const loadedMoviesList = JSON.stringify(MoviesList);
  const [moviesList, setMoviesList] = useState(JSON.parse(loadedMoviesList));
  console.log(moviesList);
  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App layout">
            <Header />
            <Switch>
              <main className="grid">
                <Route path="/404">
                  <ErrorPage />
                </Route>
                <Route exact path="/movies">
                  <MoviesPage moviesList={moviesList} />
                </Route>
                <Route exact path="/series">
                  <SeriesPage />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </main>
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
