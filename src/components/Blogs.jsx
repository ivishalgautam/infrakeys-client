"use client";

import BlogCard from "@/components/BlogCard";
import { publicRequest } from "@/libs/requestMethods";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CenterHeading from "./CenterHeading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    const resp = await publicRequest.get("/blogs");
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
      <div className="container-fluid mt-4">
        {blogs?.length !== 0 && blogs?.length < 1 ? (
          <h1 className="text-center">Add new blog</h1>
        ) : (
          <div className="row">
            <Swiper
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              // slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {blogs?.map((blog) => (
                <div className="col-lg-3 col-sm-6" key={blog.id}>
                  <SwiperSlide key={blog.id}>
                    <BlogCard blog={blog} handleBlogDelete={handleBlogDelete} />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
