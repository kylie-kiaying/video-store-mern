import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    releaseYear: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.model("Video", videoSchema);
