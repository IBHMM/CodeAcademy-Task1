### Homework Assignment: Implementing a User Management System with JavaScript and Classes

**Objective:** Create a web application using JavaScript that displays user data in an HTML table, with pagination, search functionality, and methods for age calculation and retirement status.

#### JSON Data
The JSON file (`fake_person_data.json`) will act as an API, containing an array of user objects. Each user object has the following fields:
- name
- address
- email
- phone_number
- job
- company
- birthdate

#### Requirements:

1. **Create a JavaScript Class for User:**
   - Implement a constructor to initialize user properties from the JSON data.
   - Add a method to calculate the age of the user.
   - Add a method to determine if the user is retired (age > 65).
   - Hints on implementation:
      1. **Define the `Person` Class:**
         - This class will handle basic details such as name, address, email, phone number, and birthdate.
         - Add a method to calculate the age of the person.

      2. **Extend the `User` Class from `Person`:**
         - The `User` class will inherit from the `Person` class.
         - Add specific properties and methods related to the users, such as job, company, and retirement status.
         - Ensure the methods in the `User` class utilize the inherited properties and methods from the `Person` class.

2. **HTML Table Display:**
   - Display user data in an HTML table.
   - Show only 10 records at a time and implement pagination to navigate through the data if there are more than 10 records.

3. **Search Functionality:**
   - Implement an input field to search users by name or email.
   - Display the filtered results in the table.

4. **Pagination:**
   - Implement pagination controls to navigate through the user records.

#### Implementation:

* **Setup HTML Structure:**
   - Create a basic HTML structure with a table to display user data.
   - Add an input field for the search functionality.
   - Add pagination controls (Previous and Next buttons).

* **Fetch and Parse JSON Data:**
   - Use `fetch` to get the JSON data from the provided file.
   - Parse the JSON data and create instances of the User class.


#### HTML Structure Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>User Management</title>
</head>
<body>
   <input type="text" id="search-input" placeholder="Search by name or email">
   <table>
       <thead>
           <tr>
               <th>Name</th>
               <th>Address</th>
               <th>Email</th>
               <th>Phone Number</th>
               <th>Job</th>
               <th>Company</th>
               <th>Age</th>
               <th>Retired</th>
           </tr>
       </thead>
       <tbody id="user-table-body">
           <!-- Data will be populated here -->
       </tbody>
   </table>
   <div id="pagination-controls">
       <button id="previous-button">Previous</button>
       <span id="pagination-info">Page 1 of N</span>
       <button id="next-button">Next</button>
   </div>
</body>
</html>
```

#### Additional Notes:

- Ensure to handle edge cases such as no data found during search and navigation to the previous page when already on the first page.
- Style the table and pagination controls for better user experience.
- Ensure to fetch the JSON data asynchronously and handle any potential errors during the fetch process.

This assignment will help you understand how to work with JSON data, create and manipulate DOM elements, and implement key JavaScript functionalities such as classes, methods, arrays, and event listeners.
