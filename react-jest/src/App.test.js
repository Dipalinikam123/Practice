import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/first react test case/i);
  const text2 = screen.getByText(/purvi/i);
  const title = screen.getByTitle(/React image/i);
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
