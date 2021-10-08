import { ThemeProvider } from "styled-components";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
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
        <GlobalStyle />
        <div className="App layout">
          <Header />
          <main className="grid">
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
