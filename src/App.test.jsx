import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Synchronized Clocks header', () => {
  const { getByText } = render(<App />);
  const hElement = getByText(/Synchronized Clocks/i);
  expect(hElement).toBeInTheDocument();
});
