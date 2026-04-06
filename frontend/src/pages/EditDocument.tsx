import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDocumentById, updateDocument } from "../api/documentApi";
import { getCategories } from "../api/categoryApi";
import Navbar from "../components/Navbar";

const EditDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    categoryId: "",
    expiryDate: "",
  });

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchDoc();
    fetchCategories();
  }, []);

  const fetchDoc = async () => {
    const data = await getDocumentById(Number(id));

    setForm({
      name: data.name,
      categoryId: "", // optional (we’ll explain below)
      expiryDate: data.expiryDate,
    });
  };

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await updateDocument(Number(id), {
      ...form,
      categoryId: Number(form.categoryId),
    });

    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Edit Document</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <select
            className="form-select mb-3"
            name="categoryId"
            onChange={handleChange}
          >
            <option>Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.categoryName}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="form-control mb-3"
            name="expiryDate"
            value={form.expiryDate}
            onChange={handleChange}
          />

          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditDocument;