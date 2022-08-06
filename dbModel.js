import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  bookmarks: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  created_date: { type: Date, default: Date.now },
});

export default mongoose.model("tiktok_videos", tiktokSchema);
