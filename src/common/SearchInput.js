import React from "react";
import { Input } from "antd";
import { iconSearch } from "media/svg";
import "./style.css";

const SearchInput = () => {
  const inputProps = {
    placeholder: "Search",
    prefix: <img src={iconSearch} alt="seacrh icon" />,
  };

  return <Input {...inputProps} />;
};

export default SearchInput;
