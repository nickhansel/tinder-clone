import React from "react";
import { MoodFilterContainer, MoodFilterWrapper } from "./styles";
import { MOOD_FILTER } from "../constants";
import { Note1 } from "common";

const MoodFilter = ({ setMoodId, setClientData, clientsData }) => {
  const handleMoodClick = (moodId) => {
    setMoodId(moodId);
  };

  const filterButton = ({ id, name }) => (
    <button id={id} key={id} onClick={() => handleMoodClick(id)}>
      <Note1>{name}</Note1>
    </button>
  );
  const renderFilterButtons = (
    <>
      {MOOD_FILTER.map((item) => {
        return filterButton({ ...item });
      })}
    </>
  );

  return (
    <MoodFilterWrapper>
      <MoodFilterContainer>{renderFilterButtons}</MoodFilterContainer>
    </MoodFilterWrapper>
  );
};

export default MoodFilter;
