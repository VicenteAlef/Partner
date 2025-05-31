import { useEffect, useState } from "react";
import api from "../utils/axios";
import "../App.css";

function Home() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const res = await api.get("/managers-list");
        setManagers(res.data);
      } catch (err) {
        alert("Erro ao buscar managers");
      }
    };
    fetchManagers();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col p-25">
      <h1 className="text-4xl mb-10">Lista de Managers</h1>
      <ul>
        {managers.map((manager, idx) => (
          <li key={idx} className="text-xl">
            {manager.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
