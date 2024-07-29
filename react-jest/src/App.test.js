import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Practice/Counter';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/first react test case/i);
  const text2 = screen.getByText(/purvi/i);
  const title = screen.getByTitle(/React image/i);
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});



test("counter testing", () => {
  render(<Counter />)

  let checkInput = screen.getByRole("textbox")
  let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
  expect(checkInput).toBeInTheDocument()
  expect(checkPlaceholder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("type", "text")
  // expect(checkInput).toHaveAttribute("value",)
})


describe('group testing', () => {
  test("11 counter testing", () => {
    render(<Counter />)
    let checkInput = screen.getByRole("textbox")
    let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
    expect(checkInput).toBeInTheDocument()
    expect(checkPlaceholder).toBeInTheDocument()
  });

  
test('22 renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/first react test case/i);
  expect(text).toBeInTheDocument();
});

});