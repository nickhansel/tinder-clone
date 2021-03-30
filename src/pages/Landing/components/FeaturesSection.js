/*
   FeaturesSection Page
 */

import React from 'react';
import { Row, Col } from 'antd';
import { SectionTextGroup, SectionNoColor, Container } from './styles';
import iconSearch from 'media/landing/icon-search.svg';
import iconStrong from 'media/landing/icon-strong.svg';
import iconHand from 'media/landing/icon-hand.svg';
import bgAvaOne from 'media/landing/bg-ava-1.png';

const FeaturesSection = () => {
  return (
    <div style={{ backgroundImage: `url(${bgAvaOne})` }}>
      <Container>
        <SectionNoColor id="section1">
          <Row justify="center">
            <Col>
              <SectionTextGroup>
                <h2>Turning Your Client Data Into Interactive Avatars</h2>
                <p>
                  Empava’s EAI (Empathy Avatar Interface) changes the way we
                  look at real world relationships in the digital space. The key
                  to sales and client success is relationship building and
                  Empava makes it easy to create and maintain strong client
                  relationships throughout the entire client life cycle.
                </p>
              </SectionTextGroup>
            </Col>
          </Row>
          <Row>
            <Col flex="1 1 150px">
              <div className="bucket-card">
                <img src={iconStrong}
                  alt="icon strong" />
                <h3>A Better Way To Do Account Management</h3>
                <p>
                  Empava allows Account Managers to intuitively stay on top of
                  all of their client needs in a visually engaging,
                  strategically simple way.
                </p>
              </div>
            </Col>
            <Col flex="1 1 150px">
              <div className="bucket-card">
                <img src={iconHand}
                  alt="icon hand" />
                <h3>Build Relationships Not Spreadsheets</h3>
                <p>
                  Don’t fall into the trap of going through the motions. Empava
                  puts the client relationship front and center.
                </p>
              </div>
            </Col>
            <Col flex="1 1 150px">
              <div className="bucket-card">
                <img src={iconSearch}
                  alt="icon search" />
                <h3>Let All Stakeholders Easily Track Client Health</h3>
                <p>
                  Our avatar based data visualization makes it easy for all team
                  members to stay up to date on all of your company’s clients.
                  Each client becomes an interactive badge of honor for the
                  entire company.
                </p>
              </div>
            </Col>
          </Row>
        </SectionNoColor>
      </Container>
    </div>
  );
};

export default FeaturesSection;
