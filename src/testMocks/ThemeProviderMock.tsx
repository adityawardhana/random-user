import React from "react";
import theme, { GlobalStyles } from "@adityawardhana/ts-react-ui/lib/theme";
import { ThemeProvider } from "styled-components";

export const setupTheme = (children: React.ReactNode) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
