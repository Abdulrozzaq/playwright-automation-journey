# Test Data Manager

## Overview

This project focuses on working with structured test data using JavaScript concepts that support future Playwright automation development.

The project reads an array of test user objects, filters users based on their role and optional status, transforms the selected users into formatted strings, and generates a simple test report.

---

## Project Goals

- Practice working with arrays of objects
- Access object properties
- Filter test data based on specific conditions
- Filter users by role
- Filter users by role and status
- Transform test data into a different format
- Generate a readable test report
- Practice breaking a requirement into smaller programming tasks
- Practice validating different test data scenarios

---

## Test Data Structure

Each test user contains:

- Name
- Email
- Role
- Password
- Status

Example roles include:

- Admin
- Viewer
- Editor
- Instructor

Example statuses include:

- Active
- Inactive

The project uses multiple users with different roles and statuses so the filtering logic can be properly validated.

> The passwords used in this project are dummy test credentials for practice purposes only.

---

## Project Workflow

The project follows this basic flow:

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

---

## Key JavaScript Concepts Practiced

- Arrays
- Objects
- Object properties
- Functions
- Function parameters
- Conditional statements
- `filter()`
- `map()`
- Arrow functions
- Template literals
- Callback functions
- Array transformation
- `undefined`
- Logical `&&` operator
- Console output

---

## Filtering Logic

The project supports two filtering approaches.

### Filter by Role

Example:

```javascript
getUsersByRole("editor");