import React from 'react';
import { Input } from 'antd';
import { iconSearch } from 'media/svg';
import { SearchInputStyled } from './styles';

const SearchInput = () => {
  const inputProps = {
    placeholder: 'Search',
    prefix: <img src={iconSearch}
      alt="seacrh icon" />,
  };

  return (
    <SearchInputStyled>
      <Input {...inputProps} />
    </SearchInputStyled>
  );
};

export default SearchInput;
