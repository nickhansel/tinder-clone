/*
   Contact Page
 */

import React from "react";
import { Row, Col } from "antd";
import { ContactContainer, Container } from "./styles";
import bgBottm from "media/landing/bg-bottom-section.png";
import LandingEmailForm from "./LandingEmailForm";

const ContactSection = () => {
  return (
    <div
      id="section3"
      style={{
        width: "100%",
        height: 800,
        backgroundImage: `url(${bgBottm})`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row justify="space-between" style={{ minHeight: 300 }}>
          <LandingEmailForm />
        </Row>
        <Row justify="space-between" style={{ minHeight: 300 }}>
          <Col span={12} style={{ width: "100%" }}>
            <ContactContainer>
              <h1>Empava</h1>
              <h2>Contact:</h2>
              <h2>Hello@Empava.io</h2>
            </ContactContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
