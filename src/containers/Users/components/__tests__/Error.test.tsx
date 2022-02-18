import { render } from "@testing-library/react";
import { usersMock } from "../../../../testMocks/dataMock";
import { setupTheme } from "../../../../testMocks/ThemeProviderMock";
import Provider from "../../Provider";
import useUsersMock from "../../useUser";
import Error from "../Error";

jest.mock("../../useUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Error unit tests", () => {
  test("should not render Error", () => {
    (useUsersMock as any).mockReturnValue({ ...usersMock });

    const { container } = render(
      setupTheme(
        <Provider>
          <Error />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });

  test("should render Error", () => {
    (useUsersMock as any).mockReturnValue({ ...usersMock, error: true });

    const { container } = render(
      setupTheme(
        <Provider>
          <Error />
        </Provider>
      )
    );
    expect(container).toMatchSnapshot();
  });
});
