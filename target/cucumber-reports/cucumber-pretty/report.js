$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/CucumberFile.feature");
formatter.feature({
  "line": 1,
  "name": "Test Feature",
  "description": "",
  "id": "test-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Test Scenario",
  "description": "",
  "id": "test-feature;test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@nazoor"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Wait for Seconds \"1\".",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    When This is First Feature Line \"https://Google.com\"."
    }
  ],
  "line": 8,
  "name": "Open URL \"https://Google.com\".",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Wait for Seconds \"3\".",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "TestFile.WaitForSeconds(String)"
});
formatter.result({
  "duration": 4760692400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://Google.com",
      "offset": 10
    }
  ],
  "location": "TestFile.OpenURL(String)"
});
formatter.result({
  "duration": 3207012799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "TestFile.WaitForSeconds(String)"
});
formatter.result({
  "duration": 2999507200,
  "status": "passed"
});
});