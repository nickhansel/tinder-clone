/*
   styled components for Dashboard page
 */

import { Flex, AdaptiveTitle } from "common";
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
  width: 30%;

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

/* Styles for DashboardRateModal */

export const FlexRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexRateWord = styled(Flex)`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 1em;
  width: 270px;

  @media(min-width: 321px) {
    width: 83.29%;
  }

  @media(min-width: 580px) {
    width: 65%;
  }

  @media(min-width: 760px) {
    width: 433px;
  }
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: center;

  textarea {
    resize: none;
    padding-left: 1em;
    padding-top: 1em; 
    width: 270px;
    height: 128px;
    color: #081a2b;
    border: 1px #cccfd1 solid;
    border-radius: 10px;
    outline: none;

    @media(min-width: 321px) {
      width: 83.29%;
    }

    @media(min-width: 760px) {
      padding-left: 1.0625em;
      padding-top: 1.25em;
    }
  }
`;

export const RateModalTitle = styled(AdaptiveTitle)`
  @media(min-width: 1280px) {
    font-size: 1.875em;
  }
`;

export const FlexContainer = styled(Flex)`

  flex-direction: column;
  align-items: center;

    @media(min-width: 560px) {
      flex-direction: row;
      justify-content: space-between;
    }

  div {
    display: flex;
    align-items: center;
    margin-bottom: .5em;
  }

  @media(min-width: 560px) {
    div {
      margin-bottom: 0;
    }
  }

  div + div {
    margin-left: 1em;  
  }

  @media(min-width: 780px) {
    div + div {
      margin-left: 2em;
    }
  }

  @media(min-width: 1980px) {
    div + div {
      margin-left: 3em;
    }
  }

  div > img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  
  div > p {
    display: none;
  }

  @media(min-width: 780px) {
    div > p {
      display: block;
      margin-top: 0;
      font-size: .85rem;
    }
  }

  @media(min-width: 1980px) {
    div > p {
      margin-left: 1em;
      font-size: 1.5rem;
    }
  }
`;

