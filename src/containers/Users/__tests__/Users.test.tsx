/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { setupTheme } from "../../../testMocks/ThemeProviderMock";
import User from "..";
import useFetchMock from "../../../hooks/useFetch";
import { usersMock } from "../../../testMocks/dataMock";

jest.mock("../../../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));
const useFetchMockValue = {
  data: { results: usersMock.users },
  loading: false,
  error: false,
  fetch: jest.fn(),
};
describe("Users unit test", () => {
  beforeEach(() => {
    (useFetchMock as any).mockReturnValue(useFetchMockValue);
  });
  test("should render users", () => {
    const { container } = render(setupTheme(<User />));
    expect(container).toMatchSnapshot();
  });

  test("should enable to type search", async () => {
    jest.useFakeTimers();
    render(setupTheme(<User />));
    const input = screen.getAllByRole("textbox")[0];
    fireEvent.focus(input);
    fireEvent.input(input, {
      target: { value: "type" },
    });

    jest.runOnlyPendingTimers();
    await waitFor(
      () => {
        expect(useFetchMockValue.fetch).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );
  });

  test("should open dropdown and select gender", async () => {
    const { container } = render(setupTheme(<User />));

    fireEvent.click(screen?.getAllByRole("button")[0]);
    fireEvent.click(container.querySelectorAll("li")[1]);
    expect(container.querySelectorAll("button")[0].textContent).toBe("Male");
  });

  test("should enable to reset filter", async () => {
    render(setupTheme(<User />));
    fireEvent.click(screen.getByText(/Reset Filter/i));
  });

  test("should enable to sort table", async () => {
    render(setupTheme(<User />));
    fireEvent.click(screen.getByText(/Username/i));
  });

  test("should enable to change page", async () => {
    render(setupTheme(<User />));
    const allButtons = screen?.getAllByRole("button");
    fireEvent.click(allButtons[allButtons.length - 1]);
  });
});
