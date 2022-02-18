import { render } from "@testing-library/react";
import { usersMock } from "../../../../testMocks/dataMock";
import { setupTheme } from "../../../../testMocks/ThemeProviderMock";
import Provider from "../../Provider";
import useUsersMock from "../../useUser";
import DataPagination from "../DataPagination";

jest.mock("../../useUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Data Pagination unit tests", () => {
  beforeEach(() => {
    (useUsersMock as any).mockReturnValue({ ...usersMock });
  });
  test("should render correctly", () => {
    const { container } = render(
      setupTheme(
        <Provider>
          <DataPagination />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });
});
