import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import { Container } from "./styles";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
