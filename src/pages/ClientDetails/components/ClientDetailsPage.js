/*
   Client Page
 */
import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Row } from "antd";
import { Layout, Note } from "common";
import ClientProfile from "./ClientProfile";
import ClientTouchPoints from "./ClientTouchPoints";
import Toolbox from "./Toolbox";
import { StyledCard } from "./styles";
import { getClient } from "utils";
import { iconBack } from "media/svg";
import "./styles.css";

const ClientCard = ({ size, children }) => (
  <Col flex={`1 2 ${size}px`}>
    <StyledCard>{children}</StyledCard>
  </Col>
);

const ClientDetailsPage = ({ history, location }) => {
  // Get client from db in future
  const client = getClient(location.pathname);
  const clientTitle = `${client.company} - ${client.name}`;
  const goBack = <img src={iconBack} alt="" />;

  return (
    <Layout title={clientTitle} prefix={goBack}>
      <div>
        <Row gutter={[8, 8]}>
          <ClientCard size={300}>
            <ClientProfile {...client} />
          </ClientCard>
          <ClientCard size={300}>
            <ClientTouchPoints name={client.name} />
          </ClientCard>
          <ClientCard size={200}>
            <Toolbox />
          </ClientCard>
        </Row>
        <Row gutter={[8, 8]}>
          <ClientCard size={400}>
            <Note name={client.name} />
          </ClientCard>
          <ClientCard size={400}>
            <Note name={client.name} />
          </ClientCard>
        </Row>
      </div>
    </Layout>
  );
};

export default withRouter(ClientDetailsPage);
