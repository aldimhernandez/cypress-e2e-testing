Feature: Interaction with iframes
  As a Cypress user
  I want to validate that I can interact with content inside an iframe
  So I can ensure my tests work with embedded content

  Scenario: Verify iframe content is visible and correct
    Given I visit the demoqa site
    When I am on the main page
    And I click on the "Alerts, Frame & Windows" menu
    And I click on the "Frames" option
    Then I should see the text "This is a sample page" inside the iframe
