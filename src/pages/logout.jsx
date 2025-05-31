import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { getToken, removeToken } from "../utils/auth";
import "../App.css";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await api.post(
          "/logout",
          {},
          {
            headers: { Authorization: `Bearer ${getToken()}` },
          }
        );
      } catch (err) {
        console.error("Erro ao fazer logout", err);
      } finally {
        removeToken();
        navigate("/login");
      }
    };
    doLogout();
  }, [navigate]);

  return <p>Saindo...</p>;
}

export default Logout;
