export const resultAPIMock = {
  login: {
    username: "adityawrdhn",
  },
  name: {
    first: "adit",
    last: "w",
  },
  email: "adityawrdhn@gmail.com",
  gender: "male",
  registered: { date: "2003-08-26T21:56:32.575Z" },
};

export const usersMock = {
  params: { sortBy: "email", sortOrder: "ascend", page: 1, gender: "" },
  loading: false,
  users: [...Array(3)].map(() => ({ ...resultAPIMock })),
  keyword: "xxx",
  handleChangeSort: jest.fn(),
  handleChangePage: jest.fn(),
  handleChangeSearch: jest.fn(),
  setSearchFocus: jest.fn(),
  handleSelectGender: jest.fn(),
  handleResetFilter: jest.fn(),
};
