"use client";

import BlogCard from "@/components/BlogCard";
import { publicRequest } from "@/libs/requestMethods";
import { getCookie } from "@/utils/getCookie";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import "../../styles/pagination.css";

export const metadata = {
  title: "Blog Infrakeys | Steel Manufacturers Faridabad,India",
  description:
    "Know latest blog and articles for Infrakeys Steel Fabricators,Industrial Steel,Steel supplier,scaffolding manufacturers,TMT suppliers,PEB manufacturers,Roofing,steel raw material.",
  keywords:
    "steel manufacturers in faridabad,steel fabricators nera me,industrial steel in faridabad,Steel supplier in India,scaffolding manufacturer in faridabad,TMT suppliers in Faridabad,PEB manufacturers in India, PEB manufacturers in faridabad,Steel supplier in faridabad,top steel manufacturers in faridabad,india,Steel Fabricators faridabad,steel manufacturers ner me,steel raw material, quality building products,roofing materials,",
};

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  // pagination
  const [totalPages, setTotalPages] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const params = useSearchParams();
  const pathname = usePathname();
  const startIndex = (parseInt(params.get("page") ?? 1) - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const resultsToDisplay = blogs?.slice(startIndex, endIndex);
  const router = useRouter();

  async function getBlogs() {
    try {
      const resp = await publicRequest.get("/blogs");
      // console.log(resp.data);
      setBlogs(resp?.data);
      const tp = Math.ceil(resp?.data?.length / resultsPerPage);
      setTotalPages(tp);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <section className="plainSection">
      <div className="container-fluid blogs-container">
        {blogs?.length < 1 ? (
          <h1 className="text-center">Add new blog</h1>
        ) : (
          <div className="row">
            {resultsToDisplay?.map((blog) => (
              <div className="col-lg-4 col-sm-6 mt-4" key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            ))}

            {/* pagination navigation */}
            {blogs?.length > resultsPerPage && (
              <div className="pagination flex items-center justify-center mt-10 text-white gap-3">
                <button
                  onClick={() =>
                    router.push(
                      `${pathname}?page=${
                        parseInt(params.get("page") ?? 1) - 1
                      }`
                    )
                  }
                  disabled={parseInt(params.get("page") ?? 1) === 1}
                  className={`flex items-center justify-cente px-4 py-2 pr-5 rounded-md ${
                    parseInt(params.get("page") ?? 1) === 1
                      ? "cursor-not-allowed bg-gray-400"
                      : "cursor-pointer"
                  }`}
                >
                  <MdSkipPrevious size={25} className="text-white" />
                  <span>Previous</span>
                </button>
                <div className="bg-white border px-4 py-2 rounded-md">
                  <span>Page {params.get("page") ?? 1}</span>
                  {/* Display total pages if needed */}
                  <span> of {totalPages}</span>
                </div>
                <button
                  onClick={() =>
                    router.push(
                      `${pathname}?page=${
                        parseInt(params.get("page") ?? 1) + 1
                      }`
                    )
                  }
                  disabled={endIndex >= blogs?.length}
                  className={`flex items-center justify-center px-4 py-2 pl-5 rounded-md ${
                    endIndex >= blogs?.length
                      ? "cursor-not-allowed bg-gray-400"
                      : "cursor-pointer"
                  }
          `}
                >
                  <span>Next</span>
                  <MdSkipNext size={25} fill="#fff" className="text-white" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
