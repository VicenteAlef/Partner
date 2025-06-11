import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import Home from "./pages/home";
import EmployeeDetail from "./pages/employee-detail";
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);
  // const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/employee-detail" element={<EmployeeDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
