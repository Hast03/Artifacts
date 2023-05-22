import mongoose from "mongoose";

const bookmarksSchema = new mongoose.Schema({
  name: String,
  email: String,
  author: {
    type: String,
     //required: true,
  },
  content: {
    type: String,
    //required: true,
  },
  date: {
    type: String,
    //required: true,
  },
  imageUrl: {
    type: String,
    //required: true,
  },
  readMoreUrl: {
    type: String,
  },
  time: {
    type: String,
     //required: true,
  },
  title: {
    type: String,
    //required: true,
  },
  url: {
    type: String,
  },
});

const Bookmarks = mongoose.model("bookmarks", bookmarksSchema);

export default Bookmarks;
