import { Box, Spinner } from "@adityawardhana/ts-react-ui";
import useUsers from "../useUser";

const Loading = () => {
  const { loading } = useUsers();
  if (!loading) {
    return null;
  }
  return (
    <Box height={400} alignItems="center" justifyContent="center">
      <Box width={50} height={50} m="auto">
        <Spinner color="secondary" />
      </Box>
    </Box>
  );
};

export default Loading;
