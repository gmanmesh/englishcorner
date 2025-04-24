import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from "../models/BlogModelB.js"

// Create a new blog
export const handleCreateBlog = async (req, res) => {
    try {
        const blogData = req.body;
        const userId = req.user.user_id;
        const blogId = await createBlog(blogData, userId);
        res.status(201).json({ message: "Blog created successfully", blogId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all blogs
export const handleGetAllBlogs = async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single blog
export const handleGetBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await getBlogById(blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a blog
export const handleUpdateBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const updatedData = req.body;
        const success = await updateBlog(blogId, updatedData);
        if (!success) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ message: "Blog updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a blog
export const handleDeleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const success = await deleteBlog(blogId);
        if (!success) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};