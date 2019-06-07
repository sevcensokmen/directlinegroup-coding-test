@find-vehicle
Feature: As a user I want to find vehicle with the registration number by user input
  so I can see the vehicle's insurance information or prompt a not found message

  @find-vehicle_positive
  Scenario Outline: Assert that displayed message is correct regarding result type
    Given I navigate to url "https://covercheck.vwfsinsuranceportal.co.uk/"
    When I enter "<registrationnumber>" vehicle registration number
    When I click on find vehicle button
    Then I should see the following message "<resultmessage>"


    Examples:
      | registrationnumber | resultmessage          |
      | OV12UYY            | Result for : OV12UYY   |
      | OV12UYZ            | Sorry record not found |