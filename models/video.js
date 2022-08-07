import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  username: String,
  message: String,
  likes: { type: Number, default: 0 },
  created_date: { type: Date, default: Date.now },
});

const VideoSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: { type: Number, default: 0 },
  comments: [CommentSchema],
  bookmarks: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  created_date: { type: Date, default: Date.now },
});

export default mongoose.model("tiktok_videos", VideoSchema);
