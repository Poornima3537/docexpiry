import { useNavigate } from "react-router-dom";

const Navbar = ({ setIsLoggedIn }: any) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false); 
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">DocExpiry</span>

      <div className="ms-auto d-flex align-items-center">
        <span className="text-white me-3">
          Welcome, {user.name}
        </span>

        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;