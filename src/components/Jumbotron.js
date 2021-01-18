import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../images/pexels-photo-351263.jpeg";
import img2 from "../images/pexels-photo-1034661.jpeg";
import img3 from "../images/pexels-photo-3689532.jpeg";

const Styles = styled.div`
  .jumbo {
    position: relative;
    height: 600px;
    z-index: -5;
    background: url(${img2}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
  }
  .overlay {
    background-color: black ;
    opacity: 0.4;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -3;
  }
`;

function Jumbotron(params) {
  return (
    <>
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay">
            <Container>
              <h1>PS technologies</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                quas nemo odio consectetur distinctio! Delectus minus quisquam
                officia eum fugit eveniet reprehenderit praesentium velit,
                provident cum voluptas officiis, quo hic dolorem aperiam esse
                perferendis assumenda facere eius? Quasi quos reprehenderit
                repellat nihil consequuntur beatae maxime porro, molestias
                veniam distinctio! Deleniti quod sit cum assumenda, accusamus
                nam ipsam placeat incidunt iste molestiae cupiditate ut ipsum,
                eius rerum! Deleniti dicta alias non corrupti maxime. Enim sunt
                quod iusto corporis praesentium voluptates! Veniam temporibus
                voluptatem magni repudiandae? Nostrum aperiam porro nihil eum?
                Veniam iusto temporibus aut necessitatibus molestiae? Cum, eos
                perspiciatis? Non, quaerat?
              </p>
            </Container>
          </div>
        </Jumbo>
      </Styles>
    </>
  );
}

export default Jumbotron;
