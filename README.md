# 💪 ExerTracker API

## Overview
This project is a MERN stack application designed to help users track their exercises. The backend is a robust RESTful API built with Node.js and Express, utilizing MongoDB with Mongoose for data persistence, while the frontend is a dynamic React application.

## Features
- **User Management**: Easily create and manage user accounts.
- **Exercise Logging**: Log and track various exercise routines including descriptions, durations, and dates.
- **Data Persistence**: Stores all user and exercise data securely in a MongoDB database.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for both users and exercises.
- **Responsive UI**: A user-friendly interface built with React and Bootstrap for seamless interaction.

## Getting Started
### Installation
To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Emafido/exercise-tracker.git
    cd exercise-tracker
    ```
2.  **Install Backend Dependencies**:
    Navigate to the `backend` directory and install the required packages.
    ```bash
    cd backend
    npm install
    ```
3.  **Install Frontend Dependencies**:
    Navigate back to the root directory, then into the `exercise-tracker` frontend directory and install its dependencies.
    ```bash
    cd .. # if you are still in backend directory
    npm install
    ```

### Environment Variables
The backend requires the following environment variables to run. Create a `.env` file in the `backend` directory.

-   `ATLAS_URI`: Your MongoDB connection string.
-   `PORT`: The port on which the Express server will run (e.g., `5000`).

Example `.env` file:
```
ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/exercisetracker?retryWrites=true&w=majority
PORT=5000
```

## Usage
### Running the Backend Server
1.  Ensure you are in the `backend` directory.
2.  Start the server:
    ```bash
    npm start
    ```
    The server will start on the port specified in your `.env` file (default 5000).

### Running the Frontend Application
1.  Ensure you are in the project's root directory (`exercise-tracker`).
2.  Start the React development server:
    ```bash
    npm start
    ```
    This will open the application in your browser, typically at `http://localhost:3000`.

### Interacting with the Application
Once both the backend and frontend are running, you can:
-   **View Exercises**: The homepage will display a list of all logged exercises.
-   **Create Users**: Navigate to the "Create User" link to add new users to the system.
-   **Create Exercises**: Navigate to the "Create Exercise Log" link to add new exercise entries, selecting from existing users.
-   **Edit Exercises**: Click "edit" next to an exercise to update its details.
-   **Delete Exercises**: Click "delete" next to an exercise to remove it from the list.

## API Documentation
### Base URL
`http://localhost:5000`

### Endpoints
#### GET /exercises
Retrieves a list of all exercises.

**Request**:
No payload required.

**Response**:
```json
[
  {
    "_id": "65b7d1d2b8c3d7e6f0a1b2c3",
    "username": "johndoe",
    "description": "Running in the park",
    "duration": 30,
    "date": "2024-01-29T08:00:00.000Z",
    "timestamps": {
      "createdAt": "2024-01-29T10:00:00.000Z",
      "updatedAt": "2024-01-29T10:00:00.000Z"
    }
  }
]
```

**Errors**:
- `400 Bad Request`: Error fetching exercises (e.g., database connection issue).

#### POST /exercises/add
Creates a new exercise entry.

**Request**:
```json
{
  "username": "johndoe",
  "description": "Weightlifting session",
  "duration": 60,
  "date": "2024-01-29T15:00:00.000Z"
}
```
**Response**:
```json
"Exercise added!"
```

**Errors**:
- `400 Bad Request`: Missing required fields or invalid data format.

#### GET /exercises/:id
Retrieves a specific exercise by its ID.

**Request**:
No payload required. Replace `:id` with the exercise's unique identifier.

**Response**:
```json
{
  "_id": "65b7d1d2b8c3d7e6f0a1b2c3",
  "username": "johndoe",
  "description": "Running in the park",
  "duration": 30,
  "date": "2024-01-29T08:00:00.000Z",
  "timestamps": {
    "createdAt": "2024-01-29T10:00:00.000Z",
    "updatedAt": "2024-01-29T10:00:00.000Z"
  }
}
```

**Errors**:
- `400 Bad Request`: Invalid exercise ID or exercise not found.

#### DELETE /exercises/:id
Deletes a specific exercise by its ID.

**Request**:
No payload required. Replace `:id` with the exercise's unique identifier.

**Response**:
```json
"Exercises deleted"
```

**Errors**:
- `400 Bad Request`: Invalid exercise ID or exercise not found.

#### POST /exercises/update/:id
Updates an existing exercise entry by its ID.

**Request**:
```json
{
  "username": "johndoe",
  "description": "Morning yoga",
  "duration": 45,
  "date": "2024-01-30T07:30:00.000Z"
}
```
**Response**:
```json
"Exercise Updated!"
```

**Errors**:
- `400 Bad Request`: Invalid exercise ID, missing required fields, or invalid data format.

#### GET /users
Retrieves a list of all users.

**Request**:
No payload required.

**Response**:
```json
[
  {
    "_id": "65b7d1d2b8c3d7e6f0a1b2c4",
    "username": "johndoe",
    "timestamps": {
      "createdAt": "2024-01-29T10:05:00.000Z",
      "updatedAt": "2024-01-29T10:05:00.000Z"
    }
  }
]
```

**Errors**:
- `400 Bad Request`: Error fetching users (e.g., database connection issue).

#### POST /users/add
Creates a new user.

**Request**:
```json
{
  "username": "janedoe"
}
```
**Response**:
```json
"User added!"
```

**Errors**:
- `400 Bad Request`: Missing username or username already exists.

## Technologies Used
| Technology   | Description                                            | Version |
| :----------- | :----------------------------------------------------- | :------ |
| Node.js      | JavaScript runtime environment                         | 16.x    |
| Express.js   | Web framework for Node.js                              | 5.1.0   |
| MongoDB      | NoSQL database                                         | -       |
| Mongoose     | MongoDB object data modeling (ODM) for Node.js         | 9.0.0   |
| React.js     | JavaScript library for building user interfaces        | 19.2.0  |
| Axios        | Promise-based HTTP client                              | 1.13.2  |
| Bootstrap    | CSS framework for responsive design                    | 5.x     |
| React Router | Declarative routing for React                          | 6.30.2  |

## Contributing
We welcome contributions to enhance ExerTracker! To contribute, please follow these steps:

1.  🍴 **Fork the repository**.
2.  🌿 **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  🛠️ **Make your changes** and ensure they adhere to the project's coding standards.
4.  🧪 **Write and run tests** to ensure functionality.
5.  ➕ **Commit your changes**: `git commit -m 'feat: Add new feature'`.
6.  ⬆️ **Push your branch** to your forked repository: `git push origin feature/your-feature-name`.
7.  🤝 **Open a Pull Request** to the main repository. Describe your changes clearly and concisely.

## Author Info
-   **IMAFIDON EMMANUEL**
    -   LinkedIn: [https://linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
    -   Twitter: [https://twitter.com/yourhandle](https://twitter.com/yourhandle)
    -   Portfolio: [https://yourportfolio.com](https://yourportfolio.com)

---
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/Emafido/exercise-tracker/actions)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)