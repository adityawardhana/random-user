import { Box, Button, Icon, Text } from "@adityawardhana/ts-react-ui";
import useUsers from "../useUser";

const Error = () => {
  const { error } = useUsers();
  if (!error) {
    return null;
  }
  return (
    <Box
      height={400}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box alignItems="center" mb={16}>
        <Icon icon="AlertIcon" size="large" color="red500" />
        <Text as="span" type="H24" color="red500" ml={16}>
          Oops, something went wrong!
        </Text>
      </Box>
      <Button onClick={() => window.location.reload()}>Refresh Page</Button>
    </Box>
  );
};

export default Error;
