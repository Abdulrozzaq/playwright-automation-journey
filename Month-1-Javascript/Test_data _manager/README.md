# Test Data Manager

## Overview

Test Data Manager is a JavaScript practice project focused on managing and validating structured test data.

The project simulates a common QA automation task: working with a collection of test users and selecting the appropriate test data based on specific requirements.

Users can be filtered by role and optionally by account status. The selected data is then transformed into formatted test-user strings and used to generate a simple test report.

This project was built as part of my JavaScript fundamentals practice before beginning my Playwright automation journey.

---

## Project Goals

The project was created to practice JavaScript concepts that are commonly useful in test automation.

The main goals are to:

- Work with arrays of objects
- Access and manipulate object properties
- Filter test data based on requirements
- Filter users by role
- Filter users by role and status
- Transform test data using `map()`
- Generate readable test reports
- Break requirements into smaller programming tasks
- Validate different test-data scenarios
- Practice writing reusable functions
- Prepare for data-driven testing in Playwright

---

## Test Data Structure

Each test user contains:

- Name
- Email
- Role
- Password
- Status

### Example Roles

- Admin
- Viewer
- Editor
- Instructor

### Example Statuses

- Active
- Inactive

The project uses multiple users with different combinations of roles and statuses so that different filtering scenarios can be validated.

> The passwords used in this project are dummy test credentials for practice purposes only.

---

## Project Workflow

The project follows this workflow:

```text
Test User Data
      ↓
Array of User Objects
      ↓
Filter Users by Role
      ↓
Optionally Filter by Status
      ↓
Map Users to Formatted Strings
      ↓
Generate Test Report
      ↓
Console Output