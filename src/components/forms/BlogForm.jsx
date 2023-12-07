"use client";
import Link from "next/link";
import React from "react";
import CenterHeading from "../CenterHeading";
// import Editor from "../Editor";
import { MdDeleteOutline } from "react-icons/md";
import ReactQuill from "react-quill";
const BlogForm = ({
  formData,
  handleOnChange,
  handleFormSubmit,
  categories,
  setFile,
  setTags,
  setFormData,
  setContent,
  type,
  tags,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <form onSubmit={handleFormSubmit}>
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
            onChange={(e) => setFile(e.target.files)}
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
          <ReactQuill
            theme="snow"
            name="content"
            // value={formData.content}
            onChange={(e) => setContent(e)}
            modules={modules}
            formats={formats}
          />
        </div>
        <button className="commonBtn">Create Blog</button>
      </div>
    </form>
  );
};

export default BlogForm;
