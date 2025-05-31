import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/axios";
import { setToken } from "../utils/auth";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { username, password });
      setToken(res.data.token);
      //   navigate("/");
      window.location.href = "/";
    } catch (err) {
      alert("Login falhou");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <h1 className="text-white text-5xl font-bold mb-20">Partner&trade;</h1>
      <div className="w-[350px] h-auto flex flex-col items-center justify-center bg-gray-200 px-8 py-12 rounded-xl shadow-[0_5px_25px_5px_#00000095]">
        <h2 className="text-3xl mb-15">Login</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full gap-5 mb-5"
        >
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-1 border-gray-500 rounded-sm px-3 py-1"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-1 border-gray-500 rounded-sm px-3 py-1"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white font-bold cursor-pointer tracking-wide"
          >
            Entrar
          </button>
        </form>
        <p>
          <Link to="/register" className="text-blue-800">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
