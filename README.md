# Video Store Application

A  full-stack application built with the MERN stack, facilitating CRUD operations for video management. This project showcases backend and frontend development with MongoDB, Express, React, and Node.js.

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

Ensure you have the following installed:
- Node.js
- A MongoDB instance running. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud-based MongoDB service.

1. Clone the Repository
Start by cloning the project repository from GitHub to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/kylie-kiaying/video-store-mern
cd video-store-mern
```

2. Install Dependencies

- For the Backend:
Navigate to the backend directory and install the necessary NPM packages:

```bash
cd backend
npm install
```

- For the Frontend:
Open a new terminal tab or window, navigate to the frontend directory from the project root, and install the dependencies:

```bash
cd ../frontend  
npm install
```


3. Set Up MongoDB Database URL
You need to provide a connection URL to your MongoDB database. This can be done by creating a config.js or .env file in the backend directory.  
In the file, add the following lines:

```bash
export const PORT = 5555; //Or any other port of choice
MONGODB_URL=your_mongodb_connection_string_here
```

In the MONGODB_URL, replace your_mongodb_connection_string_here with your actual MongoDB connection URL and add videos-collection in the link:  
ie.  ...mongodb.net/videos-collection?retryWrites=true&w=majority'

4. Run Backend Server
With the dependencies installed and the database URL set up, you can now run the backend server. Ensure you are in the backend directory and execute:

```bash
npm run dev
```

5. Launch Frontend application
Finally, start the frontend application. Open a new terminal tab or window, navigate to the frontend directory if you're not already there, and run:

```bash
npm run dev
```

6. Accessing the Application
With both the backend and frontend running, you can now access the Video Store Application through your web browser. By default, the frontend should be available at [http://localhost:5173](http://localhost:5173)