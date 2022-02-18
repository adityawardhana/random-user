/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { usersMock } from "../../../../testMocks/dataMock";
import { setupTheme } from "../../../../testMocks/ThemeProviderMock";
import Provider from "../../Provider";
import useUsersMock from "../../useUser";
import Filter from "../Filter";

jest.mock("../../useUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Filter unit tests", () => {
  beforeEach(() => {
    (useUsersMock as any).mockReturnValue({ ...usersMock });
  });
  test("should render Filter", () => {
    const { container } = render(
      setupTheme(
        <Provider>
          <Filter />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });

  test("should focus input", () => {
    const { container } = render(
      setupTheme(
        <Provider>
          <Filter />
        </Provider>
      )
    );

    fireEvent.focus(container?.getElementsByTagName("input")[0]);
    expect(usersMock.setSearchFocus).toHaveBeenCalled();
  });

  test("should open dropdown and select gender", async () => {
    const { container } = render(
      setupTheme(
        <Provider>
          <Filter />
        </Provider>
      )
    );

    fireEvent.click(container?.getElementsByTagName("button")[0]);
    await waitFor(() => {
      expect(screen.getAllByText(/Male/i)).toHaveLength(2)
    });
    fireEvent.click(screen.getAllByText(/Male/i)[0])
    expect(usersMock.handleSelectGender).toHaveBeenCalled()
  });

  test("should enable to click reset button", async () => {
    const { container } = render(
      setupTheme(
        <Provider>
          <Filter />
        </Provider>
      )
    );

    fireEvent.click(container?.getElementsByTagName("button")[1]);
    expect(usersMock.handleResetFilter).toHaveBeenCalled()
  });
});
