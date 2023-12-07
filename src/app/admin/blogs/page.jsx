"use client";

import { publicRequest } from "@/libs/requestMethods";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

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
      <div className="container-fluid">
        <div className="row">
          {blogs?.length < 1 ? (
            <h1 className="text-center">Add new blog</h1>
          ) : (
            blogs?.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-sm-6">
                <div className="bannerCard">
                  <Image
                    src={`https://infrakeysapp.in${blog.image}`}
                    height={300}
                    width={500}
                    alt="Blog image"
                  />
                  <div className="spcbtwn mt-2">
                    <h4>{blog.title}</h4>
                    <button
                      className="deleteBtn"
                      onClick={() => handleBlogDelete(blog.id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                  Category : {blog.category}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
