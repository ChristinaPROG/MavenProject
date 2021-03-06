$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addEmployee.feature");
formatter.feature({
  "name": "Add Employee Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat com.hrms.utils.ConfigurationReader.getPropertyValue(ConfigurationReader.java:46)\r\n\tat com.hrms.testbase.BaseClass.setUp(BaseClass.java:27)\r\n\tat com.hrms.stepdefinitions.Hooks.startTest(Hooks.java:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on add employee button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_add_employee_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Adding Employee and database validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "enter first name \"John\", middle name \"John\" and last name \"Doe\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.enter_first_name_middle_name_and_last_name(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "capture employeeId",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.capture_employeeId()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "collect employee data from hrms database",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.DbSteps.collect_employee_data_from_hrms_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "very data from db and ui is matched",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.very_data_from_db_and_ui_is_matched()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.hrms.utils.CommonMethods.takeScreenshot(CommonMethods.java:82)\r\n\tat com.hrms.stepdefinitions.Hooks.endTest(Hooks.java:20)\r\n",
  "status": "failed"
});
});