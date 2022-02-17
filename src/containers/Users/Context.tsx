import { ChangeEvent, createContext, Dispatch, SetStateAction } from "react";

interface UserContextProps {
  params: {
    inc: string;
    results: number;
    page: number;
    keyword: string;
    sortBy: string;
    sortOrder: string;
    gender: string;
  };
  users: any;
  loading: boolean;
  error: unknown;
  keyword: string;
  setSearchFocus: Dispatch<SetStateAction<boolean>>;
  handleChangePage: (value: number) => void;
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeSort: (value: string, order: string) => void;
  handleSelectGender: (val: string) => void;
  handleResetFilter: () => void;
}
const UserContext = createContext<UserContextProps>({
  params: {
    inc: "gender,name,login,email,registered",
    results: 10,
    page: 1,
    keyword: "",
    sortBy: "",
    sortOrder: "",
    gender: "",
  },
  users: {},
  loading: false,
  error: null,
  keyword: "",
  setSearchFocus: () => {},
  handleChangePage: () => {},
  handleChangeSearch: () => {},
  handleChangeSort: () => {},
  handleResetFilter: () => {},
  handleSelectGender: () => {},
});

export default UserContext;
