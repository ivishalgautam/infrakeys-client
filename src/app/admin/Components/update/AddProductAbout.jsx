"use client";
import { publicRequest } from "@/libs/requestMethods";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AdminHeading from "../AdminHeading";
import { getCookie } from "@/utils/getCookie";

export default function AddProductAbout({
  setProductId,
  productId,
  inputs,
  setInputs,
}) {
  // console.log(inputs.images);
  const [subCategories, setSubCategories] = useState([]);
  const [images, setImages] = useState([]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      const originalFileName = images[i].data.name;
      const trimmedName = originalFileName
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()
        .split("(")
        .join("")
        .split(")")
        .join("");
      formData.append("file", images[i].data, trimmedName);
    }
    formData.append("title", inputs.title);
    formData.append("sub_category_id", inputs.sub_category_id);
    formData.append("about", inputs.about);
    // formData.append("images", JSON.stringify(inputs.images));
    formData.append("keywords", inputs.keywords);
    formData.append("meta_title", inputs.meta_title);
    formData.append("meta_desc", inputs.meta_desc);
    formData.append("slug", inputs.slug);

    try {
      const resp = await publicRequest.put(`/products/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });
      if (resp.status === 200) {
        toast.success("Product updated successfully.");
        setProductId(resp.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const newImages = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const img = {
        preview: URL.createObjectURL(selectedFiles[i]),
        data: selectedFiles[i],
      };
      newImages.push(img);
    }

    setImages((prev) => [...prev, ...newImages]);
  };

  useEffect(() => {
    (async function () {
      const subCategoriesArr = await publicRequest.get("/sub-categories");
      //
      setSubCategories(subCategoriesArr.data);

      const resp = await publicRequest.get(`/products/${productId}`);

      if (resp.status === 200) {
        setInputs((prev) => ({
          ...prev,
          title: resp.data.title,
          about: resp.data.about,
          // images: resp.data.images,
          sub_category_id: resp.data.sub_category_id,
          keywords: resp.data.keywords,
          meta_title: resp.data.meta_title,
          meta_desc: resp.data.meta_desc,
          slug: resp.data.slug.split("-").join(" "),
        }));
      }

      const ids = subCategoriesArr?.data.map((item) => item.id);
      setSubCategories((prev) => prev.filter((item) => ids.includes(item.id)));
    })();
  }, [productId]);

  return (
    <div className="container-fluid">
      <AdminHeading heading="Product About" />
      <form className="row" onSubmit={handleFormSubmit}>
        {/* title */}
        <div className="col-lg-6">
          <div className="inputGroup">
            <input
              required
              type="text"
              name="title"
              autoComplete="off"
              className="createInput"
              value={inputs?.title}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label className="user-label">Product Title</label>
          </div>
        </div>

        {/* meta title */}
        <div className="col-lg-6">
          <div className="inputGroup">
            <input
              required
              type="text"
              name="meta_title"
              autoComplete="off"
              className="createInput"
              value={inputs?.meta_title}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label className="user-label">Meta Title</label>
          </div>
        </div>

        {/* slug */}
        <div className="col-lg-6 mt-4">
          <div className="inputGroup">
            <input
              required
              type="text"
              name="slug"
              autoComplete="off"
              className="createInput"
              value={inputs?.slug}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label className="user-label">Slug</label>
          </div>
        </div>

        {/* sub category */}
        <div className="col-lg-6 mt-4">
          <div className="inputGroup">
            <select
              required
              type="text"
              name="sub_category_id"
              autoComplete="off"
              className="createInput"
              value={inputs?.sub_category_id}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            >
              <option value="" hidden></option>
              {subCategories.length === 0 ? (
                <option disabled>Loading...</option>
              ) : (
                subCategories?.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })
              )}
            </select>
            <label className="user-label">Select Sub Category</label>
          </div>
        </div>

        {/* image */}
        <div className="col-lg-6 mt-4">
          <div className="inputGroup">
            <input
              type="file"
              name="text"
              multiple
              autoComplete="off"
              className="createInput"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* desc */}
        <div className="col-12 mt-3">
          <div className="inputGroup">
            <textarea
              required
              type="text"
              name="about"
              autoComplete="off"
              className="createInput"
              rows="5"
              value={inputs.about}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label className="user-label">About Description</label>
          </div>
        </div>

        {/* meta desc */}
        <div className="col-12 mt-3">
          <div className="inputGroup">
            <textarea
              required
              type="text"
              name="meta_desc"
              autoComplete="off"
              className="createInput"
              rows="5"
              value={inputs.meta_desc}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label className="user-label">Meta Description</label>
          </div>
        </div>

        {/* keywords */}
        <div className="col-12 mt-3">
          <div className="inputGroup">
            <textarea
              required
              type="text"
              name="keywords"
              autoComplete="off"
              className="createInput"
              rows="5"
              value={inputs.keywords}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label className="user-label">Keywords</label>
          </div>
        </div>

        <div className="col-12 centerit mt-3">
          <button className="commonBtn">Save Product Basic info</button>
        </div>
      </form>
    </div>
  );
}
