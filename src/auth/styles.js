/*
   styled components for shared components 
 */

import styled from "styled-components";
import { mainColors } from "utils";

export const AuthInput = styled.input`
  border: none;
  border-bottom: 2px solid ${mainColors.blue};
  font-size: 16px;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  width: 300px;

  ::placeholder: {
    color: rgba(0, 0, 0, 0.3);
  }
`;
