import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter'; // Assuming this is the path to your Counter component

test('renders counter component', () => {
  render(<Counter />);

  // Assert that the initial count is 0
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  // Simulate a click on the increment button
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);

  // Assert that the count increments to 1 after clicking the button
  const updatedCountElement = screen.getByText(/Count: 1/i);
  expect(updatedCountElement).toBeInTheDocument();
});
