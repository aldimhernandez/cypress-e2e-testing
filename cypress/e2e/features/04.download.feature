Feature: File Download

  Scenario: Verify file download functionality
    Given I visit the demoqa site
    When I navigate to the "Elements" section
    And I click on the "Upload and Download" section
    When I click on the "Download" button
    Then The file should be downloaded successfully
