import React from "react";
import { useDispatch } from "react-redux";
import { MoodFilterContainer, MoodFilterWrapper } from "./styles";
import { MOOD_FILTER } from "../constants";
import { Note1 } from "common";
import { setFilter } from "../reducers/dashboardSlice";

const MoodFilter = ({ setMoodAction }) => {
  const dispatch = useDispatch();

  const handleMoodClick = (moodId) => {
    dispatch(setFilter(moodId));
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
