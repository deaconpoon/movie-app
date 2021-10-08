import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";

import { Header, Footer } from "./components/layout";
import {
  HomePage,
  ErrorPage,
  MoviesPage,
  SeriesPage,
  DetailPage,
} from "./views";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Header />
          <main>
            <HomePage />
            <ErrorPage />
            <MoviesPage />
            <SeriesPage />
            <DetailPage />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
