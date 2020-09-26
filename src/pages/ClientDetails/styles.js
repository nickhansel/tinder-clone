/*
   styled components
 */

import styled from "styled-components";
import { Card } from "antd";

export const AvatarContainer = styled.div`
  border-radius: 8px;
  min-width: 180px;

  img {
    min-height: 350px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const StyledCard = styled(Card)`
  height: 100%;
  border-radius: 8px;
  padding: 20px;
`;