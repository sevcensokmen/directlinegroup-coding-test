$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("findVehicle.feature");
formatter.feature({
  "line": 2,
  "name": "As a user",
  "description": "I want to find the vehicle with the registration number entered\nso I can see the insurance information of vehicle.",
  "id": "as-a-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@find-vehicle"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "validate existing vehicle in the system and see insurance information of the vehicle",
  "description": "",
  "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@find-vehicle_positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate  \"https://covercheck.vwfsinsuranceportal.co.uk/\" web site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cregistrationnumber\u003e\" registration number of vehicle",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on find vehicle button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be presented with the following  result message \"\u003cresultmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;",
  "rows": [
    {
      "cells": [
        "registrationnumber",
        "resultmessage"
      ],
      "line": 15,
      "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;1"
    },
    {
      "cells": [
        "OV12UYY",
        "Result for : OV12UYY"
      ],
      "line": 16,
      "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;2"
    },
    {
      "cells": [
        "OV12UYZ",
        "Sorry record not found"
      ],
      "line": 17,
      "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;3"
    },
    {
      "cells": [
        "OV12UYW",
        "Result for : OV12UYW"
      ],
      "line": 18,
      "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4323499502,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validate existing vehicle in the system and see insurance information of the vehicle",
  "description": "",
  "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@find-vehicle"
    },
    {
      "line": 6,
      "name": "@find-vehicle_positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate  \"https://covercheck.vwfsinsuranceportal.co.uk/\" web site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"OV12UYY\" registration number of vehicle",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on find vehicle button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be presented with the following  result message \"Result for : OV12UYY\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://covercheck.vwfsinsuranceportal.co.uk/",
      "offset": 13
    }
  ],
  "location": "FindVehicleSteps.i_navigate_web_site(String)"
});
formatter.result({
  "duration": 1621449431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OV12UYY",
      "offset": 9
    }
  ],
  "location": "FindVehicleSteps.i_enter_registration_number_of_vehicle(String)"
});
formatter.result({
  "duration": 153929789,
  "status": "passed"
});
formatter.match({
  "location": "FindVehicleSteps.i_click_on_find_vehicle_button()"
});
formatter.result({
  "duration": 79845932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Result for : OV12UYY",
      "offset": 58
    }
  ],
  "location": "FindVehicleSteps.i_should_be_presented_with_the_following_result_message(String)"
});
formatter.result({
  "duration": 67513949135,
  "status": "passed"
});
formatter.after({
  "duration": 2213984028,
  "status": "passed"
});
formatter.before({
  "duration": 1860745090,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validate existing vehicle in the system and see insurance information of the vehicle",
  "description": "",
  "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@find-vehicle"
    },
    {
      "line": 6,
      "name": "@find-vehicle_positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate  \"https://covercheck.vwfsinsuranceportal.co.uk/\" web site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"OV12UYZ\" registration number of vehicle",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on find vehicle button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be presented with the following  result message \"Sorry record not found\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://covercheck.vwfsinsuranceportal.co.uk/",
      "offset": 13
    }
  ],
  "location": "FindVehicleSteps.i_navigate_web_site(String)"
});
formatter.result({
  "duration": 1303514868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OV12UYZ",
      "offset": 9
    }
  ],
  "location": "FindVehicleSteps.i_enter_registration_number_of_vehicle(String)"
});
formatter.result({
  "duration": 134394536,
  "status": "passed"
});
formatter.match({
  "location": "FindVehicleSteps.i_click_on_find_vehicle_button()"
});
formatter.result({
  "duration": 75283947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry record not found",
      "offset": 58
    }
  ],
  "location": "FindVehicleSteps.i_should_be_presented_with_the_following_result_message(String)"
});
formatter.result({
  "duration": 16997606495,
  "status": "passed"
});
formatter.after({
  "duration": 2126952873,
  "status": "passed"
});
formatter.before({
  "duration": 1560048017,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validate existing vehicle in the system and see insurance information of the vehicle",
  "description": "",
  "id": "as-a-user;validate-existing-vehicle-in-the-system-and-see-insurance-information-of-the-vehicle;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@find-vehicle"
    },
    {
      "line": 6,
      "name": "@find-vehicle_positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate  \"https://covercheck.vwfsinsuranceportal.co.uk/\" web site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"OV12UYW\" registration number of vehicle",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on find vehicle button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be presented with the following  result message \"Result for : OV12UYW\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://covercheck.vwfsinsuranceportal.co.uk/",
      "offset": 13
    }
  ],
  "location": "FindVehicleSteps.i_navigate_web_site(String)"
});
formatter.result({
  "duration": 1149025372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OV12UYW",
      "offset": 9
    }
  ],
  "location": "FindVehicleSteps.i_enter_registration_number_of_vehicle(String)"
});
formatter.result({
  "duration": 122477035,
  "status": "passed"
});
formatter.match({
  "location": "FindVehicleSteps.i_click_on_find_vehicle_button()"
});
formatter.result({
  "duration": 82073400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Result for : OV12UYW",
      "offset": 58
    }
  ],
  "location": "FindVehicleSteps.i_should_be_presented_with_the_following_result_message(String)"
});
formatter.result({
  "duration": 25164316265,
  "error_message": "java.lang.AssertionError: expected [Result for : OV12UYW] but found [Sorry record not found]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat com.github.sevcensokmen.directlinegroup.steps.FindVehicleSteps.i_should_be_presented_with_the_following_result_message(FindVehicleSteps.java:45)\n\tat ✽.Then I should be presented with the following  result message \"Result for : OV12UYW\"(findVehicle.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5729475090,
  "status": "passed"
});
});