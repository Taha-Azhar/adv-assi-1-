\# Task 2: User Data Fetching \& Filtering (ES6 + Node.js)



This project is a Node.js application built using modern JavaScript (ES6). It fetches user data from an external REST API, filters the records based on company catchphrase criteria, and formats the output using Object Destructuring.



\## 🚀 Features \& Concepts Used

\- \*\*Async/Await \& Fetch API:\*\* Asynchronously fetching user data from `https://jsonplaceholder.typicode.com/users`.

\- \*\*Array Methods (`filter` \& `map`):\*\* Filtering users whose `company.catchPhrase` contains keywords like "group" or "service" (case-insensitive).

\- \*\*Object Destructuring:\*\* Extracting specific fields (`name`, `email`, and nested `address.city`) cleanly.

\- \*\*Template Literals:\*\* Formatting transformed user details into structured string outputs.



\## 🛠️ How to Run

Ensure you have \*\*Node.js\*\* installed on your system.



```bash

node app.js

