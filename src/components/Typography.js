/*
  header styled components
 */

import styled from "styled-components";
import { typeScale } from "utils";

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
