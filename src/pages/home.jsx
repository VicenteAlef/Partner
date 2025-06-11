import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import "../App.css";

function Home() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/get-employees");
        setEmployees(res.data);
      } catch (err) {
        alert("Erro ao buscar managers");
      }
    };
    fetchEmployees();
  }, []);

  const navigateToRegister = () => {
    navigate("/employee-detail");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl">Funcionários</h1>
        <button
          onClick={navigateToRegister}
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white font-bold cursor-pointer tracking-wide"
        >
          Novo Funcionário
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300 ">
        <thead className="text-gray-700">
          <tr className="bg-white border border-gray-200">
            <th className="px-5 py-2 text-start">Nome</th>
            <th className="px-5 py-2 text-start">CPF</th>
            <th className="px-5 py-2 text-start">Email</th>
            <th className="px-5 py-2 text-start">Telefone</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-700">
          {employees.map((employee, idx) => (
            <tr key={idx} className="border border-gray-200">
              <td className="px-5 py-3">{employee.name}</td>
              <td className="px-5 py-3">{employee.cpf}</td>
              <td className="px-5 py-3">{employee.email}</td>
              <td className="px-5 py-3">{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
