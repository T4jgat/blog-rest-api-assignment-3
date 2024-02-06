import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type:      String,
        minlength: [3, "The name must be at least 3 characters long"],
        maxlength: [50, "The length of the name should not exceed 50 characters"],
        required:  [true, "Title is required"]
    },
    content: {
        type:      String,
        required:  [true, "Content is required"]
    },
}, {timestamps: true})

const Post = mongoose.model("posts", postSchema)

export default Post