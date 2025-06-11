import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="grid grid-cols-1 grid-rows-[50px_1fr_80px] min-h-screen">
      <header className="flex justify-between items-center bg-gray-800 text-white px-[5%] py-4">
        <Link to="/">
          <h2 className="font-bold text-xl">Partner&trade;</h2>
        </Link>
        <Link
          to="/logout"
          className="flex items-center gap-2 text-gray-400 hover:text-white"
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </Link>
      </header>

      <main className="bg-gray-100 px-[10%] py-20">
        <Outlet /> {/* Aqui muda o conteúdo */}
      </main>

      <footer className="bg-gray-950 text-white p-4 flex justify-center">
        <p>Partner&trade; | &copy; 2025 Vicente Dev.</p>
      </footer>
    </div>
  );
}

export default Layout;
