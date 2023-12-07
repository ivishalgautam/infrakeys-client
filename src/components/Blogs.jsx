"use client";

import BlogCard from "@/components/BlogCard";
import { publicRequest } from "@/libs/requestMethods";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CenterHeading from "./CenterHeading";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    const resp = await publicRequest.get("/blogs");
    console.log(resp);
    setBlogs(resp.data);
  }

  async function handleBlogDelete(id) {
    const confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
      await publicRequest
        .delete(`/blogs/${id}`)
        .then(() => {
          toast.success("blog deleted");
          setBlogs((prev) => prev.filter((i) => i.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <section className="plainSection">
      <CenterHeading heading="Blogs" />
      <div className="container-fluid">
        {blogs?.length !== 0 && blogs?.length < 1 ? (
          <h1 className="text-center">Add new blog</h1>
        ) : (
          <div className="row">
            {blogs?.splice(0, 3).map((blog) => (
              <div className="col-lg-3 col-sm-6">
                <BlogCard
                  blog={blog}
                  key={blog.id}
                  handleBlogDelete={handleBlogDelete}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
