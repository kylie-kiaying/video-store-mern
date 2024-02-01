import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Video } from "./models/videoModel.js";
import videosRoutes from "./routes/videosRoute.js";

const app = express();

// Middleware
app.use(express.json());

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
