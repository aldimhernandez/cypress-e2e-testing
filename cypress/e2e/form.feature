@form
Feature: Form filling
  As a user
  I want to fill out a form
  So that I can submit my information

  Background:
    Given I visit the demoqa site
    When I navigate to the form section
    And I click on the practice form button
    Then I see the empty form

  Scenario: Fill out the form with valid data: <name>, <lastName>, <email>, <gender>, <mobile>, <dob>, <subject>, <hobbies>, <picture>, <address>, <state>, <city>.
    When I enter my personal details "<name>" "<lastName>" "<email>"
    And I choose "<gender>" as my gender
    And I enter <mobile> as my mobile number
    And I enter "<dob>" as my date of birth
    And I fill out the subject field "<subject>"
    And I select the hobbies field "<hobbies>"
    And I upload the picture file "<picture>"
    And I fill out the current address field "<address>"
    And I select "<state>" and "<city>"
    And I click on the submit button
    Then I should see the form submission message

    @happyPath
    Examples:
      | name | lastName | email       | gender | mobile     | dob        | subject | hobbies        | picture        | address | state         | city  |
      | John | Doe      | john@do.com | Male   | 1234567890 | 01/01/2000 | Math    | Reading, Sport | john-due.png   | address | NCR           | Delhi |
      | Jane | Smith    | jane@sm.com | Female | 0987654321 | 02/02/2001 | Arts    | Reading, Music | jane-smith.png | address | Uttar Pradesh | Agra  |

  Scenario: Fill out the form with invalid data: <name>, <lastName>, <email>, <mobile>.
    When I enter my personal details "<name>" "<lastName>" "<email>"
    And I leave the gender field empty
    And I enter "<mobile>" as my mobile number
    And I click on the submit button
    Then I should see the form error message

    @invalidData
    Examples:
      | name | lastName | email      | mobile        |
      | 1234 |   567890 | john.do    | kwejiwehnslma |
      | d2!$ | fr&7(){} | @gmail.com | -_:.;,*       |
