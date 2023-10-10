# Backend and Frontend Technical Test

## Backend Stacks

- **Node.js + TypeScript:** This project uses Node.js as the runtime environment and TypeScript for static typing, enhancing code quality and maintainability.

- **SQLite + Sequelize:** The backend relies on SQLite as the database and Sequelize as the Object-Relational Mapping (ORM) tool, ensuring efficient data storage and management.

- **Middleware for Validation:** Middleware is implemented to validate user inputs, preventing the posting of incorrect information and enhancing data integrity.

- **Clean Architecture:** The backend follows the Clean Architecture principles, promoting modularity and maintainability, which facilitates scalability.

- **Documentation using Swagger (1st Option):** Comprehensive API documentation is available using Swagger, offering a clear and interactive way to explore the API.

- **Documentation with Postman (2nd Option):** Alternatively, you can use Postman to explore and interact with the API. Import the provided Postman collection to get started.

### How to Run the Backend

1. Install project dependencies:

   ```bash
   npm install

2. start the development server:
    ```bash
   npm run dev

3. To run the backend in a production environment:
    ```bash
   npm run start


## Backend Stacks

- **React + TypeScript:** The frontend is built using React, a popular JavaScript library, and TypeScript for enhanced development experiences.

- **Styled-Components:** The frontend is built using React, a popular JavaScript library, and TypeScript for enhanced development experiences.

- **Atomic Design Pattern for Components** Components are organized using the Atomic Design pattern, enhancing code structure and reusability.

- **Barrel Imports** Barrel imports are used to maintain clean and organized import statements.

- **Custom Own-Made Validationt:** Custom validation logic is implemented to ensure data integrity on the frontend.

### How to Run the Frontend

1. Install project dependencies:

   ```bash
   npm install

2. Start the development server:
    ```bash
   npm run start

## ENDPOINTS

- **Create a New User**
POST: 
```bash 
/v1/user/
```

Create a new user with the following request body:

```bash
{
  "firstName": "string",
  "surname": "string",
  "email": "string",
  "telephoneNumber": "string",
  "gender": "string", // male, female, Other
  "dateOfBirth": "string",
  "comments": "string"
}
```

- **Get All Users**
GET: 

```bash 
/v1/user/
```

Retrieve a list of all users.

- **Get One User**
GET: 

```bash 
/v1/user/:userId
```
Retrieve information about a specific user using their userId.

**Validation Error Response**

In case of validation errors in the request data, the API will respond with a validation error object:

```bash
{
  "errors": [
    {
      "type": "field",
      "msg": "foo is required",
      "path": "foo",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "bar must be a valid email address",
      "path": "bar",
      "location": "body"
    }
  ]
}
```

The validation error response will provide information about the specific validation errors encountered in the request. Each error object in the errors array contains the following information:

- type (string): Indicates the type of error, typically "field" for field-level validation errors.

- msg (string): Describes the validation error message.

- path (string): Specifies the field or property where the error occurred.

- location (string): Indicates the location of the error, typically "body" for request body validation.

## Example Backend Usage

**Creating a New User**

To create a new user, make a POST request to http://localhost:3000/v1/user/ with the required request body fields as described above.

```bash
POST /v1/user/ HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "firstName": "John",
  "surname": "Doe",
  "email": "john.doe@example.com",
  "telephoneNumber": "1234567890",
  "gender": "male",
  "dateOfBirth": "1990-01-01",
  "comments": "New user registration"
}
```

**Getting All Users**
```bash
GET /v1/user/ HTTP/1.1
Host: localhost:3000
```

**Getting One User**
```bash
GET /v1/user/123 HTTP/1.1
Host: localhost:3000
```


Made with 🎵 by Pasquale Palena

