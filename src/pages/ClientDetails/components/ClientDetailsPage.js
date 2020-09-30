/*
   Client Page
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { Layout, Note, H3 } from "common";
import ClientProfile from "./ClientProfile";
import ClientTouchPoints from "./ClientTouchPoints";
import Toolbox from "./Toolbox";
import ClientDetailCard from "./ClientDetailCard";
import { selectClient, selectClientNotes } from "../selectors";
import { getClient } from "utils";
import { iconBack } from "media/svg";
import "./styles.css";

const ClientDetailsPage = ({ history, location }) => {
  // Get client from db in future
  const client = getClient(location.pathname);
  const notes = useSelector(selectClientNotes());
  const clientTitle = `${client.company} - ${client.name}`;
  const goBack = <img src={iconBack} alt="" />;

  // Props
  const getCardProps = (mode, width) => {
    return {
      mode,
      width,
    };
  };
  const profileProps = getCardProps("lrg", 544);
  const touchPointProps = getCardProps("lrg", 368);
  const toolboxProps = getCardProps("lrg", 192);
  const noteProps = getCardProps("md", 560);
  const rowProps = {
    justify: "center",
  };

  const renderNotes = (
    <>
      {notes.map((note) => (
        <ClientDetailCard {...noteProps}>
          <Note name={client.name} note={note} />
        </ClientDetailCard>
      ))}
    </>
  );

  return (
    <Layout title={clientTitle} prefix={goBack}>
      <Row {...rowProps}>
        <ClientDetailCard {...profileProps}>
          <ClientProfile {...client} />
        </ClientDetailCard>
        <ClientDetailCard {...touchPointProps}>
          <ClientTouchPoints name={client.name} />
        </ClientDetailCard>
        <ClientDetailCard {...toolboxProps}>
          <Toolbox />
        </ClientDetailCard>
      </Row>
      <Row style={{ marginLeft: 8 }}>
        <H3>Notes</H3>
      </Row>
      <Row {...rowProps}>{renderNotes}</Row>
    </Layout>
  );
};

export default ClientDetailsPage;
