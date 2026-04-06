import { useState } from "react";
import { loginUser } from "../api/authApi";

export const useLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    const res = await loginUser(form);
    localStorage.setItem("user", JSON.stringify(res));
    return res;
  };

  return {
    form,
    handleChange,
    handleLogin,
  };
};