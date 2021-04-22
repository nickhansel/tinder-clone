import React from 'react';
import { Input } from 'antd';
import { iconSearch } from 'media/svg';
import { SearchInputStyled } from './styles';

const SearchInput = ({value, onChange }) => {
  const inputProps = {
    placeholder: 'Search',
    value: value,
    onChange: onChange,
    prefix: <img src={iconSearch}
      alt="search icon" />,
  };

  return (
    <SearchInputStyled>
      <Input {...inputProps} />
    </SearchInputStyled>
  );
};

export default SearchInput;
