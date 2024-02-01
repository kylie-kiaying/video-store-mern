import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Video } from "./models/videoModel.js";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello World!");
});

// Route for Save a new Video
app.post("/videos", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.director ||
      !request.body.releaseYear
    ) {
      return response.status(400).send({
        message: "Required field missing",
      });
    }
    const newVideo = {
      title: request.body.title,
      director: request.body.director,
      releaseYear: request.body.releaseYear,
    };

    const video = await Video.create(newVideo);

    return response.status(201).send(video);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

// Route for Get all videos from database
app.get("/videos", async (request, response) => {
  try {
    const videos = await Video.find({});
    return response.status(200).json({
      count: videos.length,
      data: videos,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

// Route for Get a single video by id
app.get("/videos/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const video = await Video.findById(id);
    return response.status(200).json(video);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

// Route for Update a video by id
app.put("/videos/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.director ||
      !request.body.releaseYear
    ) {
      return response.status(400).send({
        message: "Required field missing",
      });
    }
    const { id } = request.params;

    const result = await Video.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({
        message: "Video not found",
      });
    }

    return response.status(200).send({
      message: "Video updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

// Route for Delete a video by id
app.delete("/videos/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Video.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({
        message: "Video not found",
      });
    }

    return response.status(200).send({
      message: "Video deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

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
