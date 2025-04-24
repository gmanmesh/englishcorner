import React, { useState } from "react";
import { setBlogForm } from "../features/blogs";
import { useDispatch } from "react-redux";
import { BlogApi } from "../api/api";
import axios from "axios";

interface BlogFormData {
    blog_title: string;
    blog_target: string;
    blog_image: string;
    blog_status: string;
    blog_subtitle: string;
    blog_message: string;
    submitted_date: string;
}
const BlogForm: React.FC = () => {
    const dispatch = useDispatch()
    // State to manage form data
    const [formData, setFormData] = useState<BlogFormData>({
        blog_title: "",
        blog_target: "all",
        blog_image: "",
        blog_status: "draft",
        blog_subtitle: "",
        blog_message: "",
        submitted_date: new Date().toISOString().split("T")[0],
    });

    const [error, setError] = useState({
        title: "",
        subTitle: "",
        message: ""
    })

    const handleBlogTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

        if (value === "") {
            setError({ ...error, title: "Please enter title" });
            return
        }
        setError({ ...error, title: "" })
    }
    const handleSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

        if (value === "") {
            setError({ ...error, subTitle: "Please enter subtitle title" });
            return
        }
        setError({ ...error, subTitle: "" })
    }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

        if (value === "") {
            setError((pre) => ({ ...pre, message: "Please enter blog message" }));
            return
        }
        setError((pre) => ({ ...pre, message: "" }))
    }


    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.blog_title === "" && formData.blog_subtitle === "" && formData.blog_message) {
            setError((pre) => ({ ...pre, title: "Please enter title" }));
            setError((pre) => ({ ...pre, subTitle: "Please enter subtitle" }));
            setError((pre) => ({ ...pre, message: "Please enter blog message" }));
        }
        if (formData.blog_message === "") {
            setError((pre) => ({ ...pre, message: "Please enter blog message" }));
        }
        if (formData.blog_title === "") {
            setError((pre) => ({ ...pre, title: "Please enter title" }));
        }
        if (formData.blog_subtitle === "") {

            setError((pre) => ({ ...pre, subTitle: "Please enter subtitle" }));
        }
        else {



            try {
                const myBlog = {
                    blog_title: formData.blog_title,
                    blog_target: formData.blog_target,
                    blog_status: formData.blog_status,
                    blog_subtitle: formData.blog_subtitle,
                    blog_message: formData.blog_message,
                    submitted_date: formData.submitted_date,

                }

                axios.post(BlogApi, myBlog)
                    .then((res) => (
                        console.log(res)
                    ))
                    .catch((err) => (
                        console.log(err)
                    ))

            } catch (error) {
                console.error("Error submitting the form:", error);
                alert("Failed to create the blog. Please try again.");
            }
        }
    };

    return (
        <div className="max-w-2xl ml-14 p-6 bg-white shadow-md rounded-md text-primary absolute z-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Create a New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Blog Title and Subtitle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex justify-between items-center px-2">
                            <label htmlFor="blog_title" className="block text-sm font-medium text-gray-700">
                                Blog Title
                            </label>
                            <p className="text-red-500 text-[12px] font-semibold">{error.title}</p>
                        </div>
                        <input
                            type="text"
                            id="blog_title"
                            name="blog_title"
                            value={formData.blog_title}
                            onChange={handleBlogTitle}
                            className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />

                    </div>

                    <div>
                        <div className="flex justify-between items-center px-2">
                            <label htmlFor="blog_subtitle" className="block text-sm font-medium text-gray-700">
                                Blog Subtitle
                            </label>
                            <p className="text-red-500 text-[12px] font-semibold">{error.subTitle}</p>
                        </div>

                        <input
                            type="text"
                            id="blog_subtitle"
                            name="blog_subtitle"
                            value={formData.blog_subtitle}
                            onChange={handleSubtitle}
                            className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Blog Status and Image Upload */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="blog_status" className="block text-sm font-medium text-gray-700">
                            Blog Target
                        </label>
                        <select
                            id="blog_status"
                            name="blog_status"
                            value={formData.blog_status}
                            className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-md"
                        >
                            <option value="all">All</option>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                            <option value="student">Student</option>
                            <option value="users">Users</option>

                        </select>
                    </div>

                    <div>
                        <label htmlFor="blog_image" className="block text-sm font-medium text-gray-700">
                            Blog Image

                        </label>
                        <input
                            type="file"
                            id="blog_image"
                            name="blog_image"
                            // No value attribute for file inputs
                            className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Blog Message */}
                <div>
                    <div className="flex justify-between items-center px-2">
                        <label htmlFor="blog_message" className="block text-sm font-medium text-gray-700">
                            Blog Message
                        </label>
                        <p className="text-red-500 text-[12px] font-semibold">{error.message}</p>
                    </div>

                    <textarea
                        id="blog_message"
                        name="blog_message"
                        value={formData.blog_message}
                        onChange={handleMessage}
                        rows={6}
                        className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>

                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="w-full md:w-auto flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600"
                    >
                        Create Blog
                    </button>
                    <p onClick={() => dispatch(setBlogForm(false))} className="w-full md:w-auto flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 cursor-pointer ml-4 ">Cancel</p>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;