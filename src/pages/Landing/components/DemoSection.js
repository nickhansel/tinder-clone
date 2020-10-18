/*
   Contact Page
 */

import React from "react";
import { Col } from "antd";
import bgVideo from "media/landing/bg-video.png";
import { RowDemo, Container, StyledInfoSection } from "./styles";
import ReactPlayer from "react-player";
import { DEMO_URL } from "../constants";
import "./styles.css";

const DemoSection = () => {
  const InfoSection = (
    <Col className="info-col" flex="1 1 250px" style={{ marginRight: 40 }}>
      <StyledInfoSection>
        <h2 style={{ color: "white" }}>See Empava In Action</h2>
        <p style={{ color: "white" }}>
          Empower your account managers, gamify their workflow and provide the
          entire team with Intuitive quick access to the tools and data that
          matter most.
        </p>
      </StyledInfoSection>
    </Col>
  );

  return (
    <div
      id="section2"
      style={{
        width: "100%",
        height: 700,
        backgroundImage: `url(${bgVideo})`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <RowDemo>
          {InfoSection}
          <Col
            className="player-col"
            flex="1 1 350px"
            style={{ minHeight: 280, minWidth: 350 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url={DEMO_URL}
              />
            </div>
          </Col>
        </RowDemo>
      </Container>
    </div>
  );
};

export default DemoSection;
