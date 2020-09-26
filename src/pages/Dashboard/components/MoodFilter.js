import React from "react";
import { MoodFilterContainer, MoodFilterWrapper } from "./styles";
import { moodFilterData, filterDataByMood } from "utils";
import { Note1 } from "common";

const MoodFilter = ({ setMoodAction }) => {
  const handleMoodClick = (moodId) => {
    const data = filterDataByMood(moodId);

    setMoodAction(data);
  };

  const filterButton = ({ id, name }) => (
    <button id={id} onClick={() => handleMoodClick(id)}>
      <Note1>{name}</Note1>
    </button>
  );
  const renderFilterButtons = (
    <>
      {moodFilterData.map((item) => {
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
