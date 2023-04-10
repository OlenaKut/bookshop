import Container from "react-bootstrap/Container";
import HomePage from "./pages/pageHome/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Subheader from "./pages/pageHome/components/Subheader";

const App = () => {
  return (
    <Container fluid className="App">
      <HomePage />
      <Subheader />
    </Container>
  );
};

export default App;
