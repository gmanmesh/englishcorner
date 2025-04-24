import { db } from "../config/db.js";

export const createBlog = async (blogData, userId) => {
  const { blog_title, blog_target, blog_status, blog_subtitle, blog_message, submitted_date } = blogData;

  try {
    // Parse and format the submitted_date to 'YYYY-MM-DD'
    const formattedDate = new Date(submitted_date);

    // Check if the date is valid
    if (isNaN(formattedDate)) {
      throw new Error("Invalid date format for submitted_date");
    }

    const formattedSubmittedDate = formattedDate.toISOString().split('T')[0];

    // Insert blog into the database with the authenticated user's ID
    const [result] = await db.query(
      `
      INSERT INTO blogs 
      (user_id, blog_title, blog_target, blog_status, blog_subtitle, blog_message, submitted_date) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [userId, blog_title, blog_target, blog_status, blog_subtitle, blog_message, formattedSubmittedDate]
    );

    return result.insertId;
  } catch (error) {
    console.error(`Error creating blog with title '${blog_title}':`, error.message);
    throw new Error("Failed to create blog");
  }
};

// Get all blogs
export const getAllBlogs = async () => {
  try {
    const [rows] = await db.query(`
      SELECT * FROM blogs
    `);
    return rows;
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    throw new Error("Failed to fetch blogs");
  }
};

// Get a single blog by ID
export const getBlogById = async (blogId) => {
  try {
    const [rows] = await db.query("SELECT * FROM blogs WHERE blog_id = ?", [blogId]);
    return rows[0] || null;
  } catch (error) {
    console.error("Error fetching blog by ID:", error.message);
    throw new Error("Failed to fetch blog");
  }
};

// Update a blog
export const updateBlog = async (blogId, updatedData) => {
  const { blog_title, blog_author, blog_target, blog_image, blog_status, blog_subtitle, blog_message } = updatedData;

  try {
    const [result] = await db.query(
      `
      UPDATE blogs 
      SET blog_title = ?, blog_author = ?, blog_target = ?, blog_image = ?, blog_status = ?, blog_subtitle = ?, blog_message = ? 
      WHERE blog_id = ?
      `,
      [blog_title, blog_author, blog_target, blog_image, blog_status, blog_subtitle, blog_message, blogId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};

// Delete a blog
export const deleteBlog = async (blogId) => {
  try {
    const [result] = await db.query("DELETE FROM blogs WHERE blog_id = ?", [blogId]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    throw new Error("Failed to delete blog");
  }
};