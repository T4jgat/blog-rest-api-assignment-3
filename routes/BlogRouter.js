import {Router} from "express";
import BlogController from "../controllers/BlogController.js";

const router = new Router()
const blogController = BlogController

router.get("/", await blogController.retrieveAllPosts)
router.post("/", await blogController.createPost)
router.put("/:id", blogController.updatePost)
router.get("/:id", blogController.retrieveOnePost)
router.delete("/:id", blogController.deletePost)

export default router
