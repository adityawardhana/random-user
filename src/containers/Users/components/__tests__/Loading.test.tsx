import { render } from "@testing-library/react";
import { usersMock } from "../../../../testMocks/dataMock";
import { setupTheme } from "../../../../testMocks/ThemeProviderMock";
import Provider from "../../Provider";
import useUsersMock from "../../useUser";
import Loading from "../Loading";

jest.mock("../../useUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Loading unit tests", () => {
  test("should not render loading", () => {
    (useUsersMock as any).mockReturnValue({ ...usersMock });

    const { container } = render(
      setupTheme(
        <Provider>
          <Loading />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });

  test("should render loading", () => {
    (useUsersMock as any).mockReturnValue({ ...usersMock, loading: true });

    const { container } = render(
      setupTheme(
        <Provider>
          <Loading />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });
});
