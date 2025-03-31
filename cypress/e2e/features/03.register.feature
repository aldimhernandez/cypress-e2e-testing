Feature: User registration
  As a new user of demoqa.com
  I want to register an account
  So that I can log in and access personalized features

  Background:
    Given I visit the demoqa site
    When I navigate to the Book Store section
    And I click on the Login section
    And I click on the "New User" button
    Then I should see the empty registration form

  Scenario Outline: Successful registration with valid details
    When I enter a valid "<firstName>", "<lastName>", "<username>", "<password>"
    And I click on reCaptcha
    And I click on the register button
    Then I should see a success message saying "Registration successful."

    Examples:
      | firstName  | lastName  | username | password     |
      | firstName1 | lastName1 | usuario1 | contrasenI4@ |
