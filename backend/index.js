import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import videosRoutes from "./routes/videosRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware handling CORS
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello World!");
});

app.use("/videos", videosRoutes);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
