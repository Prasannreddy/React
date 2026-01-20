import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!username) {
      setError("Please enter username");
      return;
    }

    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();

    const user = users.find(
      (u) => u.username === username
    );

    if (user) {
      localStorage.removeItem("token"); 
      localStorage.setItem("user", JSON.stringify(user)); 
      navigate("/products");
    } else {
      setError("Invalid username");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <br/>
        <input
          type="password"
          placeholder="password"
          onChange={() => {}}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <br/>
        <br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
