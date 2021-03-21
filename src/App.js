import { GlobalStyle } from "./styles/globalStyle";
import HomePage from "./containers/HomePage";
import About from "./containers/About";
import Projects from "./containers/Projects";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Projects />
      <GlobalStyle />
    </>
  );
}

export default App;
