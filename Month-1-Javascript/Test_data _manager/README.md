# Test Data Manager
## Overview

This project focuses on working with structured test data using JavaScript/TypeScript concepts that support future Playwright automation development.

---

The project reads an array of test user objects, filters users based on their role, transforms the selected users into formatted strings, and generates a simple test report.

## Project Goals
- Practice working with arrays of objects
- Access object properties
- Filter test data based on specific conditions
- Transform test data into a different format
- Generate a readable test report
- Practice breaking a requirement into smaller programming tasks
- Test Data Structure

Each test user contains:

Name
Email
Role
Password

Example roles include:

Admin
Viewer
Editor

The project uses multiple users with different roles so the filtering logic can be properly validated.

## Project Workflow

The project follows this basic flow:

Test User Data
      ↓
Array of User Objects
      ↓
Filter Users by Role
      ↓
Map Users to Formatted Strings
      ↓
Generate Test Report
      ↓
Console Output
Key JavaScript Concepts Practiced
Arrays
Objects
Object properties
filter()
map()
Arrow functions
Template literals
Callback functions
Array transformation
Console output
Validation Scenarios

The test data manager will be validated using scenarios such as:

- Filter users with the admin role
- Filter users with the viewer role
- Filter users with the editor role
- Search for a role that does not exist
- Add additional users and verify they appear in the correct results
- Remove users and verify the filtered results update correctly
- Verify that the formatted report contains the expected user information

---

## Key Learning Goals

- Breaking a programming requirement into smaller problems
- Understanding the difference between filtering and transforming data
- Understanding how filter() selects elements from an array
- Understanding how map() transforms elements into a new array
- Working with objects inside arrays
- Thinking about test data and different input scenarios
- Understanding how test data can be prepared for automated tests

---

## Automation Relevance

Managing test data is an important part of test automation.

The concepts practiced in this project will later support Playwright automation scenarios such as:

- Managing login test users
- Selecting users based on roles
- Running the same test with different test data
- Creating data-driven tests
- Passing test data into automated test flows
- Validating different user types and permissions

This project provides a foundation for using structured test data in future Playwright automation projects.