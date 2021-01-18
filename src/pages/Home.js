import { React } from "react";
import Slider from "../components/Slider";
import Jumbotron from "../components/Jumbotron";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import img1 from "../images/pexels-photo-351263.jpeg";
// import img2 from "../images/pexels-photo-1034661.jpeg";
// import img3 from "../images/pexels-photo-3689532.jpeg"

function Home () {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
       
      </Container>
      <Jumbotron />
    </>
  );
}

export default Home;
