# Context

One of the projects I am working on is to manage medical records of employees of the company Vale. We use the Framework Angular on the web application.

The project grows with new features and many improvements to the UX of the users. One of the features to increase the UX is to inform a user about changes in the forms when he clicks on the button to come back to the initial page a dialog is open to inform the changes.

# What is the problem?

The problem is that we have many modules with many buttons to redirect the user, _**so a piece of code repeats every time in many components**_ and the complexity of the refactoring increases.

# Simple Solution

One solution for this problem was to use a **directive with this behavior**. When the user clicks on the button and the page has a form whith changes then open a dialog to inform the user. Yes, the principle **DRY (Don’t Repeat Yourself)** is applied perfectly and this solutions is so simple and another principle is applied **KISS (Keep it simple, stupid)**.
