import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { setupTheme } from './testMocks/ThemeProviderMock';

test('renders learn react link', () => {
  render(setupTheme(<App />));
  const linkElement = screen.getByRole('table')
  expect(linkElement).toBeInTheDocument();
});
