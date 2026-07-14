# Week 4 - Asynchronous JavaScript

## Overview

This week focused on understanding asynchronous programming in JavaScript using callbacks, promises, and async/await.

These concepts are essential for modern web development and form the foundation of Playwright automation, where most browser interactions, API requests, and assertions execute asynchronously.

## Topics Covered

* Synchronous vs Asynchronous JavaScript
* Callbacks
* Callback Functions
* Promises
* Promise Chaining
* Promise States
* Async Functions
* Await Keyword
* Error Handling with try...catch

## Exercises Completed

### Callback Functions

Practiced using callback functions to execute code after another function completes.

#### Skills Practiced

* Passing functions as arguments
* Executing callback functions
* Understanding execution order
* Writing reusable functions

#### Key Learnings

* Callbacks allow one function to execute after another.
* They provide a way to control execution flow.
* Excessive nested callbacks can make code difficult to maintain.

#### Automation Relevance

Callbacks help explain how asynchronous operations work behind the scenes and provide a foundation for understanding modern asynchronous programming.

---

### Promises

Practiced creating and consuming JavaScript promises.

#### Skills Practiced

* Creating promises
* Resolving promises
* Rejecting promises
* Using `.then()`
* Using `.catch()`

#### Key Learnings

* Promises provide a cleaner alternative to nested callbacks.
* A promise has three possible states:

  * Pending
  * Fulfilled
  * Rejected
* Promise chaining improves readability and code organization.

#### Automation Relevance

Promises are widely used for:

* API requests
* Browser interactions
* Waiting for asynchronous operations
* Managing test execution flow

---

### Async and Await

Practiced simplifying asynchronous code using `async` functions and the `await` keyword.

#### Skills Practiced

* Creating async functions
* Awaiting asynchronous operations
* Error handling using `try...catch`

#### Key Learnings

* `async/await` makes asynchronous code easier to read and maintain.
* `await` pauses execution until a promise is resolved or rejected.
* `try...catch` provides structured error handling for asynchronous operations.

#### Automation Relevance

`async/await` is heavily used throughout Playwright automation for:

* Navigating web pages
* Locating elements
* Clicking buttons
* Filling forms
* Waiting for page events
* API testing
* Assertions

---

## Key Takeaways

* Understanding asynchronous programming is essential for modern JavaScript development.
* Callbacks introduced asynchronous execution patterns.
* Promises improved code readability and error handling.
* Async/await provides the cleanest approach to writing asynchronous code.
* Proper error handling is important for building reliable automation scripts.
* These concepts form the foundation of Playwright automation and are used in nearly every automated test.


