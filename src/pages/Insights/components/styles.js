import styled from "styled-components";
import { SubH2 } from "common";
import { mainColors } from "utils";

export const SubH2Blue = styled(SubH2)`
  color: ${mainColors.brightBlue};
  font-weight: 500;
  line-height: 37px;
`;

export const StyledSmileIcon = styled.div`
  border-radius: 8px;
  height: 26px;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 4px;
  text-align: center;
  width: 26px;

  img {
    vertical-align: top;
  }
`;

export const ButtonCharts = styled.button`
  background-color: white;
  border-radius: 12px;
  border: 1px solid black;
  height: 24px;
  margin-left: 15px;
  outline: none;
  width: 77px;

  :hover {
    background-color: ${mainColors.grey1};
  }
`;
