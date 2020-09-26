/*
   styled components for Dashboard page
 */

import styled from "styled-components";

export const MoodFilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;

  button {
    border: none;
    background: none;
    color: #838c95;
    outline: none;
    padding: 0;
  }

  button:hover {
    text-decoration: underline;
  }
`;
