import Provider from "./Provider";
import Filter from "./components/Filter";
import DataTable from "./components/DataTable";
import Loading from "./components/Loading";
import Error from "./components/Error";
import DataPagination from "./components/DataPagination";

const User = () => {
  return (
    <Provider>
      <Filter />
      <DataTable />
      <Loading />
      <Error />
      <DataPagination />
    </Provider>
  );
};

export default User;
