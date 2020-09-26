/*
   styled components for Dashboard page
 */

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
