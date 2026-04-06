import { useEffect, useState } from "react";
import { addDocument } from "../api/documentApi";
import { getCategories } from "../api/categoryApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addCategory } from "../api/categoryApi";
const AddDocument = () => {
  const [form, setForm] = useState({
    name: "",
    categoryId: "",
    expiryDate: "",
  });

  const [categories, setCategories] = useState<any[]>([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addDocument(user.id, {
      ...form,
      categoryId: Number(form.categoryId),
    });

    navigate("/dashboard");
  };

  const handleAddCategory = async () => {
    const name = prompt("Enter new category name:");

    if (!name) return;

    try {
      const newCategory = await addCategory({ categoryName: name });

      setCategories((prev) => [...prev, newCategory]);

      setForm((prev) => ({
        ...prev,
        categoryId: newCategory.id,
      }));

    } catch (err) {
      alert("Failed to add category");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>Add Document</h3>

        <form onSubmit={handleSubmit} className="mt-3">

          <div className="mb-3">
            <label className="form-label">Document Name</label>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select"
                name="categoryId"
                onChange={(e) => {
                    if (e.target.value === "add-new") {
                    handleAddCategory();
                    } else {
                    setForm({ ...form, categoryId: e.target.value });
                    }
                }}
                required
            >
            <option value="">Select Category</option>

            {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                {cat.categoryName}
                </option>
            ))}

            <option value="add-new">➕ Add New Category</option>
        </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Expiry Date</label>
            <input
              type="date"
              className="form-control"
              name="expiryDate"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-success">Add Document</button>
        </form>
      </div>
    </>
  );
};

export default AddDocument;