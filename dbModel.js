import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  comments: String,
  bookmarks: String,
  shares: String,
});

export default mongoose.model("tiktok_videos", tiktokSchema);
