import { getCookie } from "@/utils/getCookie";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { trim } from "../../utils/trim";

const BlogCard = ({ blog, handleBlogDelete }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (id) => {
    getCookie("user_role") === "admin" && pathname.includes("/admin")
      ? router.push(`/admin/blogs/update/${id}`)
      : router.push(`/blog/${id}`);
  };

  return (
    <>
      <div className="blog-card mb-4">
        <div
          className="blog-card-header"
          onClick={() => handleNavigate(blog.slug)}
        >
          <img src={"https://infrakeysapp.in" + blog.image} alt={blog.title} />
        </div>

        <div className="blog-card-body">
          <span className="tag tag-teal">{blog.category}</span>
          <h4>{trim(blog.title, 30)}</h4>
          <p>{trim(blog.summary, 150)}</p>
          <div className="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&usqp=CAU"
              alt="user"
            />
            <div className="user-info">
              <h5>{new Date(blog.created_at).toDateString()}</h5>
              {/* <small>{new Date() - new Date(blog.created_at)}</small> */}
            </div>
          </div>
        </div>
        {getCookie("user_role") === "admin" && pathname.includes("admin") && (
          <button
            className="deleteBtn"
            onClick={() => handleBlogDelete(blog.id)}
          >
            <AiOutlineDelete fill="#fff" size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default BlogCard;
