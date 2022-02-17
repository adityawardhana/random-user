import { Box, Button } from "@adityawardhana/ts-react-ui"
import Dropdown from "../../../ui/Dropdown";
import SearchBox from "../../../ui/SearchBox";
import { Gender } from "../Constant";
import useUsers from "../useUser";

const Filter = () => {
  const {
    keyword,
    handleChangeSearch,
    setSearchFocus,
    handleSelectGender,
    handleResetFilter,
    params,
  } = useUsers();
  return (
    <Box mb={40} alignItems="center">
      <Box width={200} mr={16}>
        <SearchBox
          placeholder="Type your search here..."
          value={keyword}
          onChange={handleChangeSearch}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />
      </Box>
      <Box width={200} mr={16}>
        <Dropdown
          label={Gender.find((key) => key.value === params.gender)?.label || ""}
          content={Gender}
          onChange={(data) => {
            if (data.value !== params.gender) {
              handleSelectGender(data.value);
            }
          }}
        />
      </Box>
      <Box width={200}>
        <Button color="secondary" variant="outline" onClick={handleResetFilter}>
          Reset Filter
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
