/*
   Client Page
 */
import React, { useState } from "react";
import { Row, Pagination, Tooltip } from "antd";
import { Layout, Note2, H3, CardContainer } from "common";
import ClientDetailsNewNote from "./ClientDetailsNewNote";
import ClientDetailsNotesList from "./ClientDetailsNotesList";
import ClientProfile from "./ClientDetailsProfile";
import ClientDetailsTouchPoints from "./ClientDetailsTouchPoints";
import Toolbox from "./Toolbox";
import { RowPagination } from "./styles";
import { getClient } from "utils";
import { iconBack, iconAddCircle } from "media/svg";
import "./styles.css";
import { mockData, notesMock, touchPointsMock } from "utils/mock";

const NOTES_EACH_PAGE = 4;

const ClientDetailsPage = ({ history, location }) => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NOTES_EACH_PAGE);
  const [page, setPage] = useState(1);
  const [isNewNoteModal, toggleNewNoteModal] = useState(false);

  // Get client from db in future
  const client = getClient(location.pathname);
  const [notes, setNotes] = useState(notesMock);
  const [touchPoints, setPoints] = useState(touchPointsMock);

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
  const noteProps = getCardProps("sm", 560);
  const rowProps = {
    justify: "center",
    style: { width: "1200px" },
  };
  const noteListProps = {
    isNewNoteModal,
    toggleNewNoteModal,
    noteProps,
    notesData: notes,
    minVal,
    maxVal,
    authorName: "Blake", // TODO get user
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
            <CardContainer {...profileProps}>
              <ClientProfile {...client} />
            </CardContainer>
            <CardContainer {...touchPointProps}>
              <ClientDetailsTouchPoints
                authorName={"Blake"} // TODO get user
                touchPoints={touchPoints}
              />
            </CardContainer>
            <CardContainer {...toolboxProps}>
              <Toolbox />
            </CardContainer>
          </Row>
          <RowPagination>
            <H3>
              Notes{" "}
              <Tooltip title="Add Note">
                <img
                  onClick={() => toggleNewNoteModal(true)}
                  style={{ cursor: "pointer" }}
                  src={iconAddCircle}
                  alt="add note"
                />
              </Tooltip>
            </H3>
            <Pagination {...paginationProps} />
          </RowPagination>
          <Row>
            <ClientDetailsNotesList {...noteListProps} />
          </Row>
        </div>
      </Row>
      <ClientDetailsNewNote handleToggle={() => toggleNewNoteModal(false)} />
    </Layout>
  );
};

export default ClientDetailsPage;
