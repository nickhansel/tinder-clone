/*
  Landing Portal Information
 */

import React from "react";
import { Col } from "antd";
import {
  SectionBlue,
  AvatarCard,
  StyledInfoSection,
  Container,
} from "./styles";
import geoHalfCircle from "media/landing/geo-half-circle.png";
import bgAvaTwo from "media/landing/bg-ava-2.png";
import bgAvaThree from "media/landing/bg-ava-3.png";
import { AVATAR_LINKS } from "../constants";

const avatarsSectionData = {
  sectionOne: {
    text:
      "Which client is championing your product, which client is at risk and needs  immediate attention? Go beyond keeping track of these crucial factors in a cluttered CRM or a lifeless spreadsheet. Intuitively keep track of which clients are happy, who is waiting on a response and who needs a new game plan. Live your client needs and connect in a dynamic and emotionally authentic way. ",
    title: "Revolutionizing Client Management",
    imgSourse: AVATAR_LINKS.GIRL_CHAMP,
  },
  sectionTwo: {
    text:
      "Empava is more than just a visual tool, we make it easy to implement powerful strategies that  improve client health, win back at risk clients and increase renewal rates. We also provide dynamic data and relationship insights to keep your team on a winning path.",
    title: "Dynamic Tools to Improve Client Health and Gain Key Insights",
    imgSourse: AVATAR_LINKS.BOY_SAD,
  },
  sectionThree: {
    text:
      "No need to manually enter data and individual account information into Empava. Our full Salesforce integration means all key data is automatically transferred in real time to your Empava Client Dashboard and your client avatars needs and moods are always automatically up to date.",
    title: "Fully Integrated with Salesforce",
    imgSourse: AVATAR_LINKS.BOY_HAPPY,
  },
};

const getImageSection = (isTrue, imgSourse, orderSm, orderLg) => {
  if (isTrue) {
    return (
      <Col
        style={{ textAlign: "-webkit-center" }}
        flex="1 1 200px"
        xs={{ order: orderSm }}
        sm={{ order: orderSm }}
        md={{ order: orderLg }}
        lg={{ order: orderLg }}
      >
        <AvatarCard>
          <img src={imgSourse} alt="avatar" />
        </AvatarCard>
        <div>
          <img
            style={{ width: 280, paddingTop: 15, height: 40 }}
            src={geoHalfCircle}
            alt="geometry green half circle"
          />
        </div>
      </Col>
    );
  }

  return null;
};

const Section = ({ imgSourse, text, title, isLeft, bg }) => {
  const leftSection = getImageSection(isLeft, imgSourse, 1, 1);
  const rightSection = getImageSection(!isLeft, imgSourse, 0, 4);

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bg})`,
      }}
    >
      <Container>
        <StyledInfoSection gutter={[20, 60]}>
          {leftSection}
          <Col
            flex="1 1 400px"
            xs={{ order: 1 }}
            sm={{ order: 1 }}
            md={{ order: 2 }}
            lg={{ order: 2 }}
          >
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </Col>
          {rightSection}
        </StyledInfoSection>
      </Container>
    </div>
  );
};

const AvatarsSection = () => {
  const { sectionOne, sectionTwo, sectionThree } = avatarsSectionData;

  return (
    <SectionBlue>
      <Section {...sectionOne} isLeft={true} bg={bgAvaTwo} />
      <Section {...sectionTwo} isLeft={false} />
      <Section {...sectionThree} isLeft={true} bg={bgAvaThree} />
    </SectionBlue>
  );
};

export default AvatarsSection;
