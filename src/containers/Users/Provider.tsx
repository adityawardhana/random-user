import React, { FC, useEffect, useState } from "react";
import qs from "query-string";
import { getUsers } from "../../services/users";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import UserContext from "./Context";

const Provider: FC<{}> = ({ children }) => {
  const [params, setParams] = useState({
    inc: "gender,name,login,email,registered",
    results: 10,
    page: 1,
    keyword: "",
    sortBy: "",
    sortOrder: "",
    gender: "",
  });
  const [keyword, setKeyword] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const {
    fetch,
    loading,
    error,
    data: { results: users } = {},
  } = useFetch(
    (newParams) =>
      getUsers(qs.stringify(newParams || params, { skipEmptyString: true })),
    { immediate: false }
  );

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSelectGender = (value: string) => {
    setParams({ ...params, gender: value });
  };

  const handleChangeSort = (sortBy: string, sortOrder: string) => {
    setParams({ ...params, sortBy, sortOrder, page: 1 });
  };

  const handleChangePage = (page: number) => {
    setParams({ ...params, page });
  };

  const handleResetFilter = () => {
    setKeyword("");
    setParams({ ...params, page: 1, keyword: "", gender: "" });
  };

  useDebounce(
    () => {
      searchFocus && setParams({ ...params, keyword, page: 1 });
    },
    keyword,
    1000
  );

  useEffect(() => {
    fetch({ ...params });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <UserContext.Provider
      value={{
        params,
        users,
        loading,
        error,
        keyword,
        setSearchFocus,
        handleChangePage,
        handleChangeSearch,
        handleChangeSort,
        handleSelectGender,
        handleResetFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
