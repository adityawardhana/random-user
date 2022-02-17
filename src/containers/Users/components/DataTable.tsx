import { Fragment } from "react";
import { format } from "date-fns";
import Sorter from "../../../ui/Sorter";
import Table from "../../../ui/Table";
import useUsers from "../useUser";

const DataTable = () => {
  const {params, handleChangeSort, loading, users} = useUsers()
  return (
    <Table shadow round responsive>
      <thead>
        <tr>
          <th>
            <Sorter
              name="Username"
              value="username"
              order={params.sortOrder}
              onChange={handleChangeSort}
              selectedValue={params.sortBy}
            />
          </th>
          <th>
            <Sorter
              name="Name"
              value="name"
              order={params.sortOrder}
              onChange={handleChangeSort}
              selectedValue={params.sortBy}
            />
          </th>
          <th>
            <Sorter
              name="Email"
              value="email"
              order={params.sortOrder}
              onChange={handleChangeSort}
              selectedValue={params.sortBy}
            />
          </th>
          <th>
            <Sorter
              name="Gender"
              value="gender"
              order={params.sortOrder}
              onChange={handleChangeSort}
              selectedValue={params.sortBy}
            />
          </th>
          <th>
            <Sorter
              name="Registered Date"
              value="registered.date"
              order={params.sortOrder}
              onChange={handleChangeSort}
              selectedValue={params.sortBy}
            />
          </th>
        </tr>
      </thead>
      {!loading && (
        <tbody>
          {users?.map((user: any, index: number) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td>{user.login?.username}</td>
                  <td>
                    {user.name?.first} {user.name?.last}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    {format(
                      new Date(user.registered?.date),
                      "dd-MM-yyyy HH:mm"
                    )}
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      )}
    </Table>
  );
};

export default DataTable;
