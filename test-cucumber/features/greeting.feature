Feature: Greeting component

  Scenario: Display greeting message
    Given I visit the greeting page
    Then I should see the greeting message "Hello, John!"