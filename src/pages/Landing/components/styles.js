/*
  Styled componets for Landing Page
 */
import styled, { css } from "styled-components";
import { Row } from "antd";
import {
  primaryBlue,
  primaryGreen,
  bgLightBlue,
  contactBlue,
  secondaryFont,
} from "utils";
import heroBgImgSm from "media/landing/hero-bg-mobile.jpg";
import heroBgImgLg from "media/landing/bg-hero.png";

const sharedButtonStyles = css`
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  width: 140px;
  height: 45px;
`;

const sharedBackgroundStyles = css`
  height: 100%;
  position: absolute;
  width: 100%;

  div {
    overflow: hidden;
  }

  img {
    position: absolute;
    width: 100%;
    z-index: -10;
  }
`;

export const TopBackgroundContainer = styled.div`
  ${sharedBackgroundStyles};

  @media (max-width: 500px) {
    img {
      height: 400px;
      object-fit: cover;
    }
  }
`;

export const MainHeaderText = styled.div`
  padding: 20px;
  text-align: center;
  justify-content: center;
  max-width: 600px;
  margin-top: 37px;

  h1 {
    color: white;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    margin-top: 0;
    padding-bottom: 30px;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 480px) {
    margin-top: 40px;
    text-align: left;

    button {
      display: none;
    }
  }
`;

export const SectionTextGroup = styled.div`
  padding: 20px;
  text-align: center;
  justify-content: center;
  max-width: 600px;

  h2 {
    font-weight: 500;
    font-size: 32px;
    letter-spacing: 1px;
    margin-bottom: 10px;

    @media (max-width: 650px) {
      font-size: 30px;
    }
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    margin-top: 0;
    padding-bottom: 30px;
  }
`;

export const ButtonPrimaryBlue = styled.button`
  ${sharedButtonStyles};
  background-color: ${primaryBlue};
`;

export const ButtonPrimaryGreen = styled.button`
  ${sharedButtonStyles};
  background-color: ${primaryGreen};
`;
export const ButtonPrimaryGreenSm = styled.button`
  ${sharedButtonStyles};
  background-color: ${primaryGreen};
  height: 38px;
  width: 90px;
`;

export const SectionBlue = styled.div`
  background-color: ${bgLightBlue};
  overflow: hidden;

  p {
    padding-bottom: 40px;
  }

  h2 {
    font-weight: 600;
  }
`;

export const SectionNoColor = styled.div`
  overflow: hidden;

  h2 {
    font-weight: 600;
  }
`;

export const AvatarCard = styled.div`
  backgroun-color: #ffffff;
  border-radius: 20px;
  height: 300px;
  overflow: hidden;
  width: 300px;

  img {
    border-radius: 15px;
    display: block;
    width: 300px;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

/*
  Footer styles
 */
export const StyledFooter = styled.div`
  display: flex;
  line-height: 80px;
  padding-right: 20px;
  padding-left: 20px;

  p {
    font-family: ${secondaryFont};
    font-weight: 500;
    margin: 0;
    padding-left: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  max-width: 1350px;
  justify-content: start;
  width: 100%;

  p {
    font-size: 12px;
  }
`;

export const ContactContainer = styled.div`
  padding-top: 280px;
  padding-left: 20px;
  min-width: 300px;
  max-width: 500px;

  h1 {
    color: ${contactBlue};
    font-size: 2em;
    line-height: 24px;
    margin-bottom: 5px;
    margin-top: 0px;
  }

  h2 {
    color: ${contactBlue};
    line-height: 24px;
    margin-bottom: 5px;
    margin-top: 0px;
  }
`;

export const StyledInput = styled.div`
  margin-top: 68px;
  min-width: 330px;
  max-width: 500px;

  h2 {
    color: white;
    font-weight: 600;
    font-size: 36px;
  }

  input {
    border: none;
    height: 40px;
    outline: none;
  }

  .ant-input-affix-wrapper > input.ant-input {
    border-radius: 8px;
  }
`;

export const StyledInfoSection = styled(Row)`
  justify-content: space-between;

  h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 46px;
  }

  p {
    font-size: 15px;
  }
`;

export const HeroBgContainer = styled.div`
  background-image: url(${heroBgImgLg});
  background-size: cover;

  @media screen and (max-width: 500px) {
    background-image: url(${heroBgImgSm});
    background-size: cover;
    height: 700px;
  }
`;

export const CarouselStyled = styled.div`
  img {
    width: 500px;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 350px;
    }

    .ant-carousel .slick-slider {
      width: 350px !important;
    }
  }
`;

export const Container = styled.div`
  padding: 50px;

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

export const RowDemo = styled(Row)`
  height: 300px;
  margin-top: 168px;
  justify-content: space-even;

  @media screen and (max-width: 739px) {
    margin-top: 88px;

    .player-wrapper {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 78px;

    .player-wrapper {
      margin-top: 20px;
    }
  }
`;
