import { Box } from "@adityawardhana/ts-react-ui"
import Pagination from "../../../ui/Pagination";
import useUsers from "../useUser";

const DataPagination = () => {
  const { params, handleChangePage } = useUsers();
  return (
    <Box my={20}>
      <Pagination page={params.page} onChange={handleChangePage} />
    </Box>
  );
};

export default DataPagination;
