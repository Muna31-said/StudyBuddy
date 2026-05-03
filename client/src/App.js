import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddSkill from "./Components/AddSkill";
import Skills from "./Components/Skills";

function App() {
  return (
    <Container fluid>
      <Router>
        <Row>
          <Header />
        </Row>
        <Row></Row>
        <Row className="main">
          {/* create the following routes. */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddSkill />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
          </Routes>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Router>
    </Container>
  );
}

export default App;
