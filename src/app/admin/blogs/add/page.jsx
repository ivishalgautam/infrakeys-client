"use client";
import BlogForm from "@/components/forms/BlogForm";
import { publicRequest } from "@/libs/requestMethods";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    tag: "",
    category: "",
  });

  // console.log({ formData });
  const [content, setContent] = useState("");
  console.log({ content });
  const [file, setFile] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  function handleOnChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (tags.length <= 0) {
      return toast.error("Please add some tags");
    }

    const data = new FormData();
    data.set("title", formData.title);
    data.set("summary", formData.summary);
    data.set("category", formData.category);
    data.set("tags", JSON.stringify(tags));
    data.set("content", content);
    data.set("file", file[0]);

    const resp = await publicRequest.post("/blogs", data);
    if (resp.status === 200) {
      toast.success("New blog created");
      router.push("/admin/blogs");
    }
  }

  useEffect(() => {
    async function getCategories() {
      const { data } = await publicRequest("/blogs-categories");
      // console.log({ data });
      setCategories(data);
    }
    getCategories();
  }, []);

  return (
    <div className="container quill-container">
      <BlogForm
        formData={formData}
        handleOnChange={handleOnChange}
        handleFormSubmit={handleFormSubmit}
        categories={categories}
        setFile={setFile}
        setTags={setTags}
        setFormData={setFormData}
        setContent={setContent}
        type="create"
        tags={tags}
      />
    </div>
  );
}
