/*
  header styled components
 */

import styled from "styled-components";
import { mainColors, typeScale, typeScaleSm, weightScale, fonts } from "utils";

export const Title = styled.h1`
  color: black;
  font-size: ${typeScale.header1};
  font-weight: 700;
  text-alighn: left;
`;

export const SubTitle = styled.h2`
  color: black;
  font-size: ${typeScale.header2};
  font-weight: 700;
  text-align: left;
`;

// 45px
export const H1 = styled.h1`
  font-family: ${fonts.trebuchet};
  font-size: ${typeScaleSm.headline1};
  font-weight: ${weightScale.bold};
  line-height: 56px;
`;
// 32px
export const H2 = styled.h2`
  font-family: ${fonts.trebuchet};
  font-size: ${typeScaleSm.headline2};
  font-weight: ${weightScale.bold};
  line-height: 48px;
`;
// 32px
export const H3 = styled.h3`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.headline3};
  font-weight: ${weightScale.bold};
  line-height: 48px;
  margin: 0;
`;
// 24px
export const H4 = styled.h4`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.headline4};
  font-weight: ${weightScale.bold};
  line-height: 32px;
  margin: 0;
`;
// 20px
export const SubH1 = styled.h5`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.subline1};
  font-weight: ${weightScale.bold};
  line-height: 28px;
  margin: 0;
`;
// 16px
export const SubH2 = styled.h6`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.subline2};
  font-weight: ${weightScale.bold};
  line-height: 24px;
  margin: 0;
`;
// 16px
export const Text = styled.p`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.text};
  font-weight: ${weightScale.regular};
  line-height: 24px;
  margin: 0;
`;
export const TextInfo = styled(Text)`
  color: ${mainColors.blue};
`;
// 14px
export const Note1 = styled.p`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.note1};
  font-weight: ${weightScale.medium};
  line-height: 20px;
  margin-bottom: 5px;
`;
export const Note1Reg = styled(Note1)`
  font-weight: 400;
`;
export const Note1Grey = styled(Note1Reg)`
  color: ${mainColors.grey3};
`;
// 12px
export const Note2 = styled.p`
  font-family: ${fonts.roboto};
  font-size: ${typeScaleSm.note2};
  font-weight: ${weightScale.regular};
  line-height: 20px;
  margin-bottom: 5px;
`;
export const Note2Grey = styled(Note2)`
  color: ${mainColors.grey3};
  margin-top: 6px;
  margin-bottom: 0;
  margin-left: 4px;
`;
