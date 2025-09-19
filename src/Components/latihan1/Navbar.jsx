import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="p-2 bg-blue-700">
        {user ? (
          <>
            <span>Halo {user.name}</span>
            <button onClick={logout} className="ml-2">
              Logout
            </button>
          </>
        ) : (
          <span className="text-lime-50">Kamu belum Login</span>
        )}
      </nav>
    </>
  );
}
