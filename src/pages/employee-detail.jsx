import { useState } from "react";
import api from "../utils/axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

function employeeDetail() {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/new-employee", { name, cpf, email, phone });
      navigate("/");
    } catch (err) {
      console.log("Falha ao registrar funcionário");
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <main>
      <h1 className="text-4xl mb-10">Novo funcionário</h1>
      <form
        onSubmit={handleRegister}
        className="flex flex-col p-10 bg-white sm:w-[50%] rounded-lg border border-gray-300 gap-2"
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-sm p-2 focus:outline-blue-300 focus:outline-[1px] mb-3"
        />

        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          placeholder="000.000.000-00"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="border border-gray-300 rounded-sm p-2 focus:outline-blue-300 focus:outline-[1px] mb-3"
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-sm p-2 focus:outline-blue-300 focus:outline-[1px] mb-3"
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          name="phone"
          placeholder="(00) 00000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-300 rounded-sm p-2 focus:outline-blue-300 focus:outline-[1px] mb-3"
        />
        <div className="flex gap-5">
          <button
            onClick={backToHome}
            className="px-5 py-1 border-2 border-blue-600 rounded-sm text-blue-600 hover:text-white hover:bg-blue-600 font-800 cursor-pointer"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="px-5 py-1 border-2 border-blue-600 hover:border-blue-800 bg-blue-600 hover:bg-blue-800 rounded-sm text-white cursor-pointer"
          >
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}

export default employeeDetail;
