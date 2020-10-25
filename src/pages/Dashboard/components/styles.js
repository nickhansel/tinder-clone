/*
   styled components for Dashboard page
 */

import Modal from "antd/lib/modal/Modal";
import { Flex } from "common";
import styled from "styled-components";
import { mainColors, spacing } from "utils";

export const MoodFilterWrapper = styled.div`
  background-color: ${mainColors.white};
  width: 100%;
`;
export const MoodFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 330px;
  padding-left: ${spacing.lg};
  width: 50%;

  button {
    border: none;
    background: none;
    color: ${mainColors.grey2};
    outline: none;
    padding: 0;

    p {
      margin: 0;
    }
  }

  button:hover {
    text-decoration: underline;
  }
`;

export const YellowBox = styled.div`
  position: relative;

  div {
    background-color: #f9cd34;
    height: 80px;
    position: absolute;
    left: -31px;
    top: 415px;
    width: 30px;
  }
`;

/* Styles for DashboardRateModal */

export const FlexRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div img {
    margin-right: 60px;
  }

  div img:last-child {
    margin-right: 0;
  }
`;

export const FlexRateWord = styled(Flex)`
  margin: 25px 120px 50px;

  justify-content: space-between;
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: center;


  textarea {
    resize: none;
    padding-left: 17px;
    padding-top: 20px;
    width: 643px;
    height: 128px;
    color: #081a2b;
    border: 1px #CCCFD1 solid;
    border-radius: 10px;
    outline: none;
  }
`;

