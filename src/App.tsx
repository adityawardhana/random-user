import User from "./containers/Users";
import axios from "axios";
import { Box } from "@adityawardhana/ts-react-ui";

axios.defaults.baseURL = "https://randomuser.me/api";
function App() {
  return (
    <Box p={20}>
      <User />
    </Box>
  );
}

export default App;
