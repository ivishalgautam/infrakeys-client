"use client";
import { publicRequest } from "@/libs/requestMethods";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

export default function BlogCategory() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    const resp = await publicRequest.post("/blogs-categories", { category });
    console.log({ resp });
    if (resp.status === 200) {
      toast.success("new category created");
      setCategories((prev) => [...prev, resp.data]);
    }
  }

  async function handleDelete(id) {
    const resp = await publicRequest.delete(`/blogs-categories/${id}`);
    if (resp.status === 200) {
      setCategories((prev) => prev.filter((i) => i.id !== id));
      toast.success("category deleted");
    }
  }

  useEffect(() => {
    async function getCategories() {
      const { data } = await publicRequest.get("/blogs-categories");
      console.log({ data });
      setCategories(data);
    }
    getCategories();
  }, []);
  return (
    <section className="centerForm">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <div className="formSmall">
              <h4>Create New Blog Category</h4>
              <form onSubmit={handleFormSubmit}>
                <div className="inputGroup">
                  <input
                    required
                    autoComplete="off"
                    className="createInput"
                    type="text"
                    name="name"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label className="user-label">Blog Category Name</label>
                </div>
                <button className="commonBtn">Create Blog Category</button>
              </form>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            {categories.length > 0 && (
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((category, ind) => (
                    <tr>
                      <td>{ind + 1}</td>
                      <td>{category.category}</td>
                      <td>
                        <button
                          style={{
                            cursor: "pointer",
                            padding: "0.1rem",
                            borderRadius: "4px",
                            background: "red",
                            outline: "none",
                            border: "none",
                          }}
                          onClick={() => handleDelete(category.id)}
                        >
                          <MdDeleteOutline size={25} fill="#fff" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
