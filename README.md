# Contact-Manager-Backend
Contact Manager App
Description
This is a simple Contact Manager application built with Node.js, Express, and MongoDB. It allows users to manage their contacts by providing functionalities to create, read, update, and delete contacts. The application also includes user authentication.
Usage
Once the server is running, you can use a tool like Postman or cURL to interact with the API. The server will be running at http://localhost:5000.

API Endpoints
Contacts

GET /api/contacts: Retrieve all contacts.
POST /api/contacts: Create a new contact.
GET /api/contacts/:id
: Retrieve a single contact by ID.
PUT /api/contacts/:id
: Update a contact by ID.
DELETE /api/contacts/:id
: Delete a contact by ID.
Users

POST /api/users/register: Register a new user.
POST /api/users/login: Login a user.
Configuration
The application uses environment variables for configuration. The following variables are available:


Error Handling
The application uses a custom error handler middleware to handle errors uniformly. It catches errors thrown in the routes and sends a structured response with an error message and status code.


