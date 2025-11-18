import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Enter a username (fake login).");
      return;
    }
    login();
    navigate(from, { replace: true });
  };

  if (isAuthenticated) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: "block", width: "100%", marginTop: 6 }}
          />
        </label>
        <button type="submit" style={{ marginTop: 8 }}>
          Login
        </button>
      </form>
    </div>
  );
}
