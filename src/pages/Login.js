import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", form);
      localStorage.setItem("token", data.token);
      setAuthToken(data.token);
      navigate("/home");
    } catch {
      alert("Credenciales inválidas");
    }
    
  };

  return (
    <main style={{ maxWidth: 320, margin: "4rem auto" }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Correo"
          required
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          required
          onChange={handleChange}
        />
        <button>Entrar</button>
      </form>
    </main>
  );
}

