import { useEffect, useState } from "react";
import { getDocuments, deleteDocument } from "../api/documentApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCategories } from "../api/categoryApi";

const Dashboard = ({ setIsLoggedIn }: any) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    fetchDocs();
    fetchCategories();
  }, []);

  
const fetchCategories = async () => {
  const data = await getCategories();
  setCategories(data);
};

  const fetchDocs = async () => {
    const data = await getDocuments(user.id);
    setDocuments(data);
  };

  const handleDelete = async (id: number) => {
    await deleteDocument(id);
    fetchDocs();
  };

  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn}/>

      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          <h2>Dashboard</h2>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/add-document")}
          >
            + Add Document
          </button>
        </div>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Expiry</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.categoryName}</td>
                <td>{doc.expiryDate}</td>
                <td>{doc.status}</td>
                <td>
                    <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => navigate(`/edit-document/${doc.id}`)}
                    >
                    Edit
                    </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;