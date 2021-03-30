/*
   Hero Page
 */

import React from 'react';
import { Row, Col, Carousel } from 'antd';
import { CarouselStyled, MainHeaderText, HeroBgContainer } from './styles';
import './styles.css';

const carouselStyle = {
  color: '#fff',
  textAlign: 'center',
};

const renderCarousel = (
  <CarouselStyled>
    <Carousel
      dots={{ className: 'my-dots-class' }}
      autoplay
      speed={500}
      effect="fade"
      easing="linear"
      style={{ width: 700 }}
    >
      <div>
        {' '}
        <img
          style={carouselStyle}
          src={'https://empava-storage.s3.amazonaws.com/dashboard.png'}
          alt="carousel dashboard"
        />
      </div>
      <div>
        {' '}
        <img
          style={carouselStyle}
          src={'https://empava-storage.s3.amazonaws.com/client-profile.jpg'}
          alt="carousel dashboard client"
        />
      </div>
      <div>
        {' '}
        <img
          style={carouselStyle}
          src={'https://empava-storage.s3.amazonaws.com/relationship.jpg'}
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
          <MainHeaderText justify="center">
            <h1>Empowering Client Relationships.</h1>
            <p>
              Empava brings your client realtionships into the digital era with
              powerful visual and interactive tools to keep engagement up and
              relationships strong
            </p>
          </MainHeaderText>
        </Col>
      </Row>
      <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        {renderCarousel}
      </div>
    </HeroBgContainer>
  );
};

export default Hero;
