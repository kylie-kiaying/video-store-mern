# Video Store Application

A comprehensive full-stack application built with the MERN stack, facilitating CRUD operations for video management. This project showcases backend and frontend development with MongoDB, Express, React, and Node.js, demonstrating robust data management and interactive user interfaces.

## Tech Stack

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Features

- **Backend CRUD Operations**: Create, Read, Update, and Delete (CRUD) operations for videos implemented in Node.js.
- **Backend Router**: Efficient routing using Express.js to manage API endpoints.
- **MongoDB Operations**: Utilization of MongoDB with Mongoose for data persistence and schema modeling.
- **Frontend CRUD Operations**: React.js implementation for managing video data on the client side.
- **Frontend Router**: Single Page Application (SPA) routing with React Router.

## Getting Started

### Prerequisites

- Node.js
- MongoDB Connection URL

1. Clone the Repository

```bash
git clone https://github.com/kylie-kiaying/video-store-mern
cd video-store-mern
```

2. Install dependencies for both backend and frontend:
cd into frontend and backend folder to install dependencies  

```bash
npm install
```

3. Get MongoDB Database URL
Create a config.js or .env file in the backend folder

```
export const PORT = 5555;

export const mongoDBURL = {INSERT_MONGO_URL}
```

4. Run backend server

```bash
cd backend
npm run dev
```

5. Launch frontend application
```
cd frontend
npm run dev
```