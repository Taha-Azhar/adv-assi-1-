Task 2: User Data Filtering & Formatting (Node.js ES6)

This repository contains a Node.js script (app.js) designed to fetch, filter, and transform user data from the JSONPlaceholder API using modern JavaScript (ES6+) features.

📌 Project Overview

The objective of this assignment is to demonstrate fundamental ES6+ concepts and asynchronous data handling in Node.js.

🛠️ Key Features & ES6 Concepts Used

Async/Await & Fetch API: Asynchronous request handling to pull data from an external REST API.

Array Filtering (Array.prototype.filter): Filters users whose company catchPhrase contains the word "group" or "service" (case-insensitive).

Object Destructuring: Extracting specific properties (name, email, and nested address.city) directly from user objects.

Template Literals: Formatting the final output string dynamically.

🚀 How to Run Locally

Prerequisites

Make sure you have Node.js installed on your system.

Steps

Clone this repository:

git clone https://github.com/Taha-Azhar/adv-assi-1-.git


Navigate to the project directory:

cd adv-assi-1-


Run the script:

node app.js


📊 Expected Output Structure

The output will be formatted as an array of structured strings:

[
  "User: [Name] | Email: [Email] | City: [City]"
]


(Note: If no users match the exact search criteria from the mock API, an empty array [] will be returned, indicating valid filtering logic).

👨‍💻 Author

  TAHA AZHAR

