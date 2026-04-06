import { useState } from "react";
import { registerUser } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
     if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { confirmPassword, ...payload } = form;
      const res = await registerUser(payload);
      localStorage.setItem("user", JSON.stringify(res));
      alert("Registered successfully");
      navigate("/dashboard");
    } catch (err: any) {
      console.error("ERROR:", err);
      console.error("RESPONSE:", err.response);
      alert(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <h3 className="auth-title">Register</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <div className="password-field">
                <input
                  className="form-control password-input"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                />

                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁️
                </span>
              </div>

            <input
              className="form-control"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <button className="btn-custom">Register</button>
          </form>

          <div className="link-text">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel gradient">
          <h2 className="auth-title">Welcome Back!</h2>
          <p>Sign in to access your documents and stay on track.</p>

          <div className="feature">📊 Access dashboard</div>
          <div className="feature">⏰ View expiries</div>

          <Link to="/" className="btn btn-outline-light mt-4">
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Register;