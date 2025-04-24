import { Router } from "express";
import { handleCreateBlog, handleGetAllBlogs, handleGetBlogById, handleUpdateBlog, handleDeleteBlog } from "../controls/blogControlB.js";
import { authenticate } from "../middleware/authMiddleware.js";

const blogs = Router();

// Create a new blog
blogs.post("/", authenticate, handleCreateBlog);

// Get all blogs
blogs.get("/", authenticate, handleGetAllBlogs);

// Get a single blog
blogs.get("/:blogId", handleGetBlogById);

// Update a blog
blogs.put("/:blogId", handleUpdateBlog);

// Delete a blog
blogs.delete("/:blogId", handleDeleteBlog);

export default blogs