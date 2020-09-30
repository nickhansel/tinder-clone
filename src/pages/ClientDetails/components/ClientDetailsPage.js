/*
   Client Page
 */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Pagination, Tooltip } from "antd";
import { Layout, Note2, H3 } from "common";
import ClientDetailCard from "./ClientDetailCard";
import ClientDetailsNewNote from "./ClientDetailsNewNote";
import ClientDetailsNotesList from "./ClientDetailsNotesList";
import ClientProfile from "./ClientProfile";
import ClientTouchPoints from "./ClientTouchPoints";
import Toolbox from "./Toolbox";
import { RowPagination } from "./styles";
import { selectClientNotes, selectTouchPoints } from "../selectors";
import { selectUser } from "reducers/selector";
import { toggleNewNoteModal } from "../reducers/clientDetailsSlice";
import { getClient } from "utils";
import { iconBack, iconAddCircle } from "media/svg";
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
  const user = useSelector(selectUser());
  const dispatch = useDispatch();

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
    authorName: user.name,
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
              <ClientTouchPoints
                authorName={user.name}
                touchPoints={touchPoints}
              />
            </ClientDetailCard>
            <ClientDetailCard {...toolboxProps}>
              <Toolbox />
            </ClientDetailCard>
          </Row>
          <RowPagination>
            <H3>
              Notes{" "}
              <Tooltip title="Add Note">
                <img
                  onClick={() => dispatch(toggleNewNoteModal(true))}
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
      <ClientDetailsNewNote
        handleToggle={() => dispatch(toggleNewNoteModal(false))}
      />
    </Layout>
  );
};

export default ClientDetailsPage;
