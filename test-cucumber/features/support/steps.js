// src/cucumber/steps/greetingSteps.js
const { Given, Then } = require('@cucumber/cucumber');
const { render, screen } = require('@testing-library/react');
const Greeting = require('../../src/Greeting').default;

Given('I visit the greeting page', () => {
  render(<Greeting name="John" />);
});

Then('I should see the greeting message {string}', (message) => {
  expect(screen.getByText(message)).toBeInTheDocument();
});
