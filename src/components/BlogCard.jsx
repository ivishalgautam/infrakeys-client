import { getCookie } from "@/utils/getCookie";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const BlogCard = ({ blog, handleBlogDelete }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (id) => {
    router.push(`/admin/blogs/update/${id}`);
  };

  function trim(text, length) {
    return text.length > length ? text.substring(0, 150) + "..." : text;
  }

  return (
    <div className="blog-card">
      <div onClick={() => handleNavigate(blog.id)}>
        <div className={"image-container"}>
          <Image
            src={`https://infrakeysapp.in${blog.image}`}
            layout="fill"
            className={"image"}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="mt-auto">
          <h4>{blog.title}</h4>
          <div className="spcbtwn">
            <p>{trim(blog.summary, 150)}</p>
            {getCookie("user_role") === "admin" &&
              pathname.includes("admin") && (
                <button
                  className="deleteBtn"
                  onClick={() => handleBlogDelete(blog.id)}
                >
                  <AiOutlineDelete />
                </button>
              )}
          </div>
        </div>
        <div className="spcbtwn mt-4">
          <span>Category : {blog.category}</span>
          <span>{new Date(blog.created_at).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
