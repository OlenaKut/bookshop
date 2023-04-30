import Container from "react-bootstrap/Container";
import HomePage from "./pages/pageHome/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/pageHome/components/Header";
import NavMenu from "./pages/pageHome/components/NavMenu";
import Row from "react-bootstrap/Row";
import Subheader from "./pages/pageHome/components/Subheader";
import Main from "./pages/pageHome/components/Main";
import Footer from "./pages/pageHome/components/Footer";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Container fluid className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Subheader />} />
        </Routes>
        <Row>
          <NavMenu />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
