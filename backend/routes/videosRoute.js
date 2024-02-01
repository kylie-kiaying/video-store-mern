import express from "express";
import { Video } from "../models/videoModel.js";

const router = express.Router();

// Route for Save a new Video
router.post("/", async (request, response) => {
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
router.get("/", async (request, response) => {
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
router.get("/:id", async (request, response) => {
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
router.put("/:id", async (request, response) => {
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
router.delete("/:id", async (request, response) => {
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

export default router;