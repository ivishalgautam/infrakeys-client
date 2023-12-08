"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import CenterHeading from "../CenterHeading";
import { MdDeleteOutline } from "react-icons/md";
import Editor from "../Editor";
import { publicRequest } from "@/libs/requestMethods";

const BlogForm = ({
  formData,
  handleOnChange,
  handleFormSubmit,
  handleUpdate,
  categories,
  setFile,
  setTags,
  setFormData,
  setContent,
  type,
  tags,
  slug,
  content,
  uploadFile,
}) => {
  async function getBlogBySlug(slug) {
    try {
      const { data } = await publicRequest.get(`/blogs/slug/${slug}`);
      for (const [key, value] of Object.entries(data)) {
        if (key in formData) {
          setFormData((prev) => ({ ...prev, [key]: value }));
        }
      }
      setContent(data.content);
      setTags(data.tags);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e, id) => {
    type === "edit"
      ? uploadFile(e.target.files[0], id)
      : setFile(e.target.files);
  };

  useEffect(() => {
    if (slug && type === "edit") {
      getBlogBySlug(slug);
    }
  }, [slug]);

  return (
    <form onSubmit={type === "edit" && slug ? handleUpdate : handleFormSubmit}>
      <CenterHeading heading="Create blog" />
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {/* title */}
        <div className="inputGroup">
          <input
            required
            autoComplete="off"
            className="createInput"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleOnChange}
          />
          <label className="user-label">Title</label>
        </div>

        {/* summary */}
        <div className="inputGroup">
          <input
            required
            autoComplete="off"
            className="createInput"
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleOnChange}
          />
          <label className="user-label">Description</label>
        </div>

        {/* category */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="inputGroup">
            <select
              name="category"
              className="createInput"
              onChange={handleOnChange}
            >
              {categories?.map(({ category, id }) => (
                <option value={id} key={id}>
                  {category}
                </option>
              ))}
            </select>
            <label className="user-label">Category</label>
          </div>
          <Link
            style={{
              width: "10rem",
              backgroundColor: "#fb5001",
              border: "none",
              outline: "none",
              borderRadius: "1rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href="/admin/categories/blog"
          >
            Create category
          </Link>
        </div>

        {/* image */}
        <div className="inputGroup">
          {/* {image.preview && (
            <Image src={image?.preview} alt="ashfb" width={100} height={100} />
          )} */}
          <input
            required
            autoComplete="off"
            className="createInput"
            type="file"
            name="text"
            onChange={(e) => handleFileChange(e, formData.id)}
          />
        </div>

        {/* tags */}
        <div>
          <div
            className="inputGroup"
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <input
              autoComplete="off"
              className="createInput"
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleOnChange}
            />
            <label className="user-label">Keyword</label>

            <button
              type="button"
              style={{
                width: "10rem",
                backgroundColor: "#fb5001",
                border: "none",
                outline: "none",
                borderRadius: "1rem",
                color: "#fff",
              }}
              onClick={() => {
                setTags((prev) =>
                  prev.includes(formData.tag)
                    ? [...prev]
                    : [...prev, formData.tag]
                );
                setFormData((prev) => ({ ...prev, tag: "" }));
              }}
            >
              Add Keyword
            </button>
          </div>

          {tags?.length > 0 && (
            <div className="tags-container">
              Tags:{" "}
              {tags?.map((tag, key) => (
                <div className="tag-wrapper">
                  <span key={key}>{tag}</span>
                  <button
                    onClick={() =>
                      setTags((prev) => prev.filter((elem, ind) => ind !== key))
                    }
                    type="button"
                  >
                    <MdDeleteOutline fill="#fff" size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* content */}
        <div className="inputGroup">
          <h3>Content</h3>
          <Editor setContent={setContent} type="edit" content={content} />
        </div>
        <button className="commonBtn">Create Blog</button>
      </div>
    </form>
  );
};

export default BlogForm;
