import React from "react";
import { MoodFilterContainer } from "./styles";
import { moodFilterData, filterDataByMood } from "utils";

const MoodFilter = ({ setMoodAction }) => {
  const handleMoodClick = (moodId) => {
    const data = filterDataByMood(moodId);

    setMoodAction(data);
  };

  const filterButton = ({ id, name }) => (
    <button id={id} onClick={() => handleMoodClick(id)}>
      {name}
    </button>
  );
  const renderFilterButtons = (
    <>
      {moodFilterData.map((item) => {
        return filterButton({ ...item });
      })}
    </>
  );

  return <MoodFilterContainer>{renderFilterButtons}</MoodFilterContainer>;
};

export default MoodFilter;
