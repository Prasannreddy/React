import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav>
      <Link to="/products">Products</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
