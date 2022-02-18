import { render } from "@testing-library/react";
import { usersMock } from "../../../../testMocks/dataMock";
import { setupTheme } from "../../../../testMocks/ThemeProviderMock";
import Provider from "../../Provider";
import useUsersMock from "../../useUser";
import DataTable from "../DataTable";

jest.mock("../../useUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Data Table unit tests", () => {
  beforeEach(() => {
    (useUsersMock as any).mockReturnValue({ ...usersMock });
  });
  test("should render correctly", () => {
    const { container } = render(
      setupTheme(
        <Provider>
          <DataTable />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });
});
