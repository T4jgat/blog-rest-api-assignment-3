import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type:      String,
        minlength: [3, "The title must be at least 3 characters long"],
        maxlength: [50, "The length of the title should not exceed 50 characters"],
        required:  [true, "Title is required"]
    },
    content: {
        type:      String,
        minlength: [5, "The content must be at least 5 characters long"],
        maxlength: [1000, "The length of the content should not exceed 1000 characters"],
        required:  [true, "Content is required"]
    },
}, {timestamps: true})

const Post = mongoose.model("posts", postSchema)

export default Post