import Container from "react-bootstrap/Container";
import HomePage from "./pages/pageHome/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Container fluid className="App">
      <HomePage />
    </Container>
  );
};

export default App;
