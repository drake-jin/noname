import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const renderedApp = render(<App />);
  const linkElement = renderedApp.getByText(/안녕하세요/i);
  expect(linkElement).toBeInTheDocument();
});
