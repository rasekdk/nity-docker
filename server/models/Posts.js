import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  parent: {
    type: String,
  },
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
  },
  likes: {
    type: [String],
  },
  image: {
    type: String,
  },
});

const PostModel = mongoose.model("posts", PostSchema);

export default PostModel;
