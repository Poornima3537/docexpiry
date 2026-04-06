import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import { useLogin } from "../hooks/useLogin";
import { loginUser } from "../api/authApi";
type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const Login = ({ setIsLoggedIn }: Props) => {
  const navigate = useNavigate();

  const { form, handleChange } = useLogin();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
    const res = await loginUser(form);
    localStorage.setItem("user", JSON.stringify(res));

    setIsLoggedIn(true); // ✅ triggers re-render
    navigate("/dashboard", { replace: true });

  } catch {
    alert("Login failed");
  }
 };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* LEFT PANEL */}
        <div className="left-panel gradient">
          <h2 className="auth-title">Doc Expiry Tracker</h2>
          <p>
            Manage your important documents and never miss expiry dates again.
          </p>

          <div className="feature">📄 Store all documents</div>
          <div className="feature">⏰ Track expiry dates</div>

          <Link to="/register" className="btn btn-outline-light mt-4">
            Create Account
          </Link>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h3 className="auth-title">Login</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button className="btn-custom">Login</button>
          </form>

          <div className="link-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;