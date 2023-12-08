"use client";
import BlogForm from "@/components/forms/BlogForm";
import { publicRequest } from "@/libs/requestMethods";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function UpdateBlog({ params: { id } }) {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    tag: "",
    category: "",
    id: "",
  });

  const [content, setContent] = useState("");
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

  async function handleUpdate(e) {
    e.preventDefault();

    if (tags.length <= 0) {
      return toast.error("Please add some tags");
    }

    const resp = await publicRequest.put(`/blogs/${id}`, {
      title: formData.title,
      summary: formData.summary,
      category: formData.category,
      tags: JSON.stringify(tags),
      content: content,
    });

    if (resp.status === 200) {
      toast.success("blog updated");
      router.push("/admin/blogs");
    }
  }

  async function uploadFile(file, id) {
    const data = new FormData();
    data.set("file", file);
    try {
      const resp = await publicRequest.put(`/blogs/update-image/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log({ resp });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getCategories() {
      const { data } = await publicRequest("/blogs-categories");
      setCategories(data);
    }
    getCategories();
  }, []);

  return (
    <div className="container quill-container">
      <BlogForm
        formData={formData}
        handleOnChange={handleOnChange}
        handleUpdate={handleUpdate}
        categories={categories}
        setFile={setFile}
        setTags={setTags}
        setFormData={setFormData}
        content={content}
        setContent={setContent}
        type="edit"
        tags={tags}
        slug={id}
        uploadFile={uploadFile}
      />
    </div>
  );
}
