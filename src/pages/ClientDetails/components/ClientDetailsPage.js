/*
   Client Page
 */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Pagination } from "antd";
import { Layout, Note2, H3, SpaceBetween } from "common";
import ClientProfile from "./ClientProfile";
import ClientTouchPoints from "./ClientTouchPoints";
import ClientDetailsNotesList from "./ClientDetailsNotesList";
import ClientDetailCard from "./ClientDetailCard";
import Toolbox from "./Toolbox";
import { RowPagination } from "./styles";
import { selectClientNotes, selectTouchPoints } from "../selectors";
import { getClient } from "utils";
import { iconBack } from "media/svg";
import "./styles.css";

const NOTES_EACH_PAGE = 4;

const ClientDetailsPage = ({ history, location }) => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NOTES_EACH_PAGE);
  const [page, setPage] = useState(1);
  // Get client from db in future
  const client = getClient(location.pathname);
  const notes = useSelector(selectClientNotes());
  const touchPoints = useSelector(selectTouchPoints());

  const onPageChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * NOTES_EACH_PAGE);
    setMaxVal(page * NOTES_EACH_PAGE);
  };

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
    style: { width: "1200px" },
  };
  const noteListProps = {
    noteProps,
    notesData: notes,
    minVal,
    maxVal,
    authorName: "contact name",
  };
  const paginationProps = {
    current: page,
    defaultCurrent: 1,
    onChange: onPageChange,
    pageSize: NOTES_EACH_PAGE,
    showTotal: (total) => <Note2>Total {notes.length} notes</Note2>,
    total: notes.length,
  };
  const layoutProps = {
    title: `${client.company} - ${client.name}`,
    prefix: <img src={iconBack} alt="" />,
  };

  return (
    <Layout {...layoutProps}>
      <Row {...rowProps}>
        <div>
          <Row>
            <ClientDetailCard {...profileProps}>
              <ClientProfile {...client} />
            </ClientDetailCard>
            <ClientDetailCard {...touchPointProps}>
              <ClientTouchPoints name={client.name} touchPoints={touchPoints} />
            </ClientDetailCard>
            <ClientDetailCard {...toolboxProps}>
              <Toolbox />
            </ClientDetailCard>
          </Row>
          <RowPagination>
            <H3>Notes</H3>
            <Pagination {...paginationProps} />
          </RowPagination>
          <Row>
            <ClientDetailsNotesList {...noteListProps} />
          </Row>
        </div>
      </Row>
    </Layout>
  );
};

export default ClientDetailsPage;
