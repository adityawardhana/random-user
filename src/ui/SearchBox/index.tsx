import { FC } from "react";
import { Icon } from "@adityawardhana/ts-react-ui";
import { SearchBoxWrapper, SearchInput } from "./styles";


const SearchBox: FC<any> = (props) => {
  return (
    <SearchBoxWrapper>
      <SearchInput {...props} />
      <Icon icon="SearchIcon" size="medium" className="icon-search" />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
