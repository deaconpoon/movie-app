import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Header, Footer } from "./components/layout";
import { HomePage, ErrorPage, MoviesPage, SeriesPage } from "./views";
import MoviesList from "./utils/sample.json";
import { useEffect } from "react";

function App() {
  const baseURL = "http://numbersapi.com/";
  const loadedMoviesList = JSON.stringify(MoviesList);
  const [moviesList, setMoviesList] = useState(JSON.parse(loadedMoviesList));
  const [num, setNum] = useState(0);
  console.log(moviesList);
  const getFunFact = (num) => {
    axios.get(`${baseURL + num}/year`).then((response) => response.data);
  };

  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App layout">
            <Header />
            <button onClick={() => getFunFact(1988)}>click me</button>
            <Switch>
              <main className="grid">
                <Route path="/404">
                  <ErrorPage />
                </Route>
                <Route exact path="/movies">
                  <MoviesPage moviesList={moviesList} />
                </Route>
                <Route exact path="/series">
                  <SeriesPage moviesList={moviesList} />
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
