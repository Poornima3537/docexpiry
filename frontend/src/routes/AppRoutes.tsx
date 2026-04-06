import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AddDocument from "../pages/AddDocument";
import EditDocument from "../pages/EditDocument";

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("user") !== null);
  }, []);

  return (
    <BrowserRouter> {/* ✅ ADD THIS BACK */}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" />
              : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/register"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" />
              : <Register />
          }
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn
              ? <Dashboard setIsLoggedIn={setIsLoggedIn}/>
              : <Navigate to="/" />
          }
        />

        <Route
          path="/add-document"
          element={
            isLoggedIn
              ? <AddDocument />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/edit-document/:id"
          element={
            isLoggedIn
              ? <EditDocument />
              : <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;