import Post from "../models/post.js";

class BlogController {
    retrieveAllPosts = async (req, res) => {
        try {
            const posts = await Post.find()
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.json(posts).status(200)
            console.log("GET - /blogs")
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }


    createPost = async (req, res) => {
        const {title, content} = req.body
        const post = new Post({title, content})

        try {
            const postToSave = await post.save()
            res.status(200).json(postToSave)
            console.log("POST - /blogs")
        } catch (err) {
            console.error(err.title)
            res.status(400).json({message: err.message})
        }
    }

    retrieveOnePost = async (req, res) => {
        const {id} = req.params
        try {
            const post = await Post.findById(id)
            res.json(post).status(200)
        } catch (err) {
            console.error(err.title)
            res.status(400).json({message: err.message})
        }
    }

    updatePost = async (req, res) => {
        const {id} = req.params
        const updatedData = req.body
        const options = {new: true}
        try {
            const post = await Post.findByIdAndUpdate(id, updatedData, options)
            res.send(post)
        } catch (err) {
            console.error(err.title)
            res.status(400).json({message: err.message})
        }
    }

    deletePost = async (req, res) => {
        try {
            const {id} = req.params
            const postToDelete = await Post.findByIdAndDelete(id)
            res.send(`Post "${postToDelete.title}" has been deleted...`)
        } catch (err) {
            console.error(err.title)
            res.status(400).json({message: err.message})
        }
    }
}

export default new BlogController()
