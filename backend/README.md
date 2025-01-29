# API Documentation for `/api/auth/signup`

## Endpoint Description
The `/api/auth/signup` endpoint is used to register a new user. It validates the input data, checks for existing users, hashes the password, and saves the user in the database. If the registration is successful, it generates a token and returns the user data.

---

## HTTP Method
POST

---

## Request URL
```
/api/auth/signup
```

---

## Request Headers
- `Content-Type: application/json`

---

## Request Body
The request body must be sent in JSON format with the following fields:

| Field     | Type   | Required | Description                                  |
|-----------|--------|----------|----------------------------------------------|
| fullname  | String | Yes      | Full name of the user.                      |
| email     | String | Yes      | Email address of the user. Must be unique.  |
| password  | String | Yes      | Password of the user (minimum 6 characters).|

**Example Request Body:**
```json
{
  "fullname": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

## Responses

### Success Responses

- **201 Created**
  - **Description:** User successfully registered.
  - **Response Body:**
    ```json
    {
      "_id": "64cdd88e9f1d3a5a12345678",
      "fullname": "John Doe",
      "email": "john.doe@example.com"
    }
    ```

### Error Responses

- **400 Bad Request**
  - **Description:** Validation error or missing fields.
  - **Possible Messages:**
    - `"All fields are required."`
    - `"Password should be at least 6 characters long."`
    - `"Email already exists."`

- **500 Internal Server Error**
  - **Description:** Server error or invalid user data.
  - **Response Body:**
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

---
# API Documentation for `/api/auth/login`

## Endpoint Description
The `/api/auth/login` endpoint is used to authenticate an existing user. It validates the user's credentials (email and password), and if successful, generates a token and returns the user's details.

---

## HTTP Method
POST

---

## Request URL
```
/api/auth/login
```

---

## Request Headers
- `Content-Type: application/json`

---

## Request Body
The request body must be sent in JSON format with the following fields:

| Field    | Type   | Required | Description                                  |
|----------|--------|----------|----------------------------------------------|
| email    | String | Yes      | Email address of the user.                  |
| password | String | Yes      | Password of the user.                       |

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

## Responses

### Success Responses

- **201 Created**
  - **Description:** User successfully authenticated.
  - **Response Body:**
    ```json
    {
      "_id": "64cdd88e9f1d3a5a12345678",
      "fullname": "John Doe",
      "email": "john.doe@example.com"
    }
    ```

### Error Responses

- **400 Bad Request**
  - **Description:** Invalid credentials or missing fields.
  - **Possible Messages:**
    - `"Invalid credentials"`

- **500 Internal Server Error**
  - **Description:** Server error during authentication.
  - **Response Body:**
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

---
# API Documentation for `/api/auth/logout`

## Endpoint Description
The `/api/auth/logout` endpoint is used to log out an authenticated user. It clears the user's session by removing the authentication token from cookies.

---

## HTTP Method
POST

---

## Request URL
```
/api/auth/logout
```

---

## Request Headers
- `Content-Type: application/json`

---

## Request Body
This endpoint does not require any request body.

---

## Responses

### Success Responses

- **200 OK**
  - **Description:** User successfully logged out.
  - **Response Body:**
    ```json
    {
      "message": "Logout successful."
    }
    ```

### Error Responses

- **500 Internal Server Error**
  - **Description:** Server error during the logout process.
  - **Response Body:**
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

---









## Car Endpoints

### Get All Cars
- **Method:** GET
- **Endpoint:** `/api/car/get-all-cars`
- **Sample Input:** None
- **Sample Output:**
  ```json
  [
    {
      "_id": "carId1",
      "user": "userId1",
      "title": "Car Title 1",
      "description": "Description 1",
      "tags": ["tag1", "tag2"],
      "images": ["image1.jpg", "image2.jpg"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    // ...more cars
  ]
  ```

### Get User Cars
- **Method:** GET
- **Endpoint:** `/api/car/get-user-cars`
- **Sample Input:** None
- **Sample Output:**
  ```json
  [
    {
      "_id": "carId1",
      "user": "userId1",
      "title": "Car Title 1",
      "description": "Description 1",
      "tags": ["tag1", "tag2"],
      "images": ["image1.jpg", "image2.jpg"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    // ...more cars
  ]
  ```

### Get Car by ID
- **Method:** GET
- **Endpoint:** `/api/car/get-car/:id`
- **Sample Input:** None
- **Sample Output:**
  ```json
  {
    "_id": "carId1",
    "user": "userId1",
    "title": "Car Title 1",
    "description": "Description 1",
    "tags": ["tag1", "tag2"],
    "images": ["image1.jpg", "image2.jpg"],
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

### Create Car
- **Method:** POST
- **Endpoint:** `/api/car/create-car`
- **Sample Input:**
  ```json
  {
    "title": "New Car",
    "description": "New Car Description",
    "tags": ["new", "car"],
    "images": ["newcar1.jpg", "newcar2.jpg"]
  }
  ```
- **Sample Output:**
  ```json
  {
    "_id": "newCarId",
    "user": "userId1",
    "title": "New Car",
    "description": "New Car Description",
    "tags": ["new", "car"],
    "images": ["newcar1.jpg", "newcar2.jpg"],
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

### Update Car
- **Method:** PUT
- **Endpoint:** `/api/car/update-car/:id`
- **Sample Input:**
  ```json
  {
    "title": "Updated Car",
    "description": "Updated Car Description",
    "tags": ["updated", "car"],
    "images": ["updatedcar1.jpg", "updatedcar2.jpg"]
  }
  ```
- **Sample Output:**
  ```json
  {
    "_id": "carId1",
    "user": "userId1",
    "title": "Updated Car",
    "description": "Updated Car Description",
    "tags": ["updated", "car"],
    "images": ["updatedcar1.jpg", "updatedcar2.jpg"],
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

### Delete Car
- **Method:** DELETE
- **Endpoint:** `/api/car/delete-car/:id`
- **Sample Input:** None
- **Sample Output:**
  ```json
  {
    "message": "Car deleted successfully"
  }
  ```
