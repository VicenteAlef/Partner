import { useEffect, useState } from "react";
import api from "../utils/axios";
import "../App.css";

function Home() {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-4xl mb-10">Funcionários</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="border border-gray-400 px-4 py-2 text-start">
              Nome
            </th>
            <th className="border border-gray-400 px-4 py-2 text-start">CPF</th>
            <th className="border border-gray-400 px-4 py-2 text-start">
              Email
            </th>
            <th className="border border-gray-400 px-4 py-2 text-start">
              Telefone
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {employees.map((employee, idx) => (
            <tr key={idx}>
              <td className="border border-gray-400 px-4 py-2">
                {employee.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {employee.cpf}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {employee.email}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {employee.telefone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
