/*
   Hero Page
 */

import React from "react";
import { Row, Col, Carousel } from "antd";
import {
  CarouselStyled,
  MainHeaderText,
  ButtonPrimaryGreen,
  HeroBgContainer,
} from "./styles";
import carouselOne from "media/landing/dashboard.png";
import carouselTwo from "media/landing/relationship.jpg";
import carouselThree from "media/landing/client-profile.jpg";
import "./styles.css";

const carouselStyle = {
  color: "#fff",
  textAlign: "center",
};

const renderCarousel = (
  <CarouselStyled>
    <Carousel
      dots={{ className: "my-dots-class" }}
      autoplay
      speed={500}
      effect="fade"
      easing="linear"
      style={{ width: 500 }}
    >
      <div>
        {" "}
        <img style={carouselStyle} src={carouselOne} alt="carousel dashboard" />
      </div>
      <div>
        {" "}
        <img
          style={carouselStyle}
          src={carouselTwo}
          alt="carousel dashboard client"
        />
      </div>
      <div>
        {" "}
        <img
          style={carouselStyle}
          src={carouselThree}
          alt="carousel relationship"
        />
      </div>
    </Carousel>
  </CarouselStyled>
);

const Hero = () => {
  return (
    <HeroBgContainer>
      <Row justify="center">
        <Col>
          <MainHeaderText>
            <h1>Empowering Client Relationships.</h1>
            <p>
              Empava brings your client realtionships into the digital era wit
              powerful visual and interactive tools to keep engagement up and
              relationships strong
            </p>
            <a href="/#section3">
              <ButtonPrimaryGreen>Learn More</ButtonPrimaryGreen>
            </a>
          </MainHeaderText>
        </Col>
      </Row>
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        {renderCarousel}
      </div>
    </HeroBgContainer>
  );
};

export default Hero;
