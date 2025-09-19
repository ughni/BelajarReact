import { useContext, useState } from "react";
import {AuthContext} from "./AuthContext"

export default function Home() {
  const { user, login } = useContext(AuthContext);

  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    if (userName.trim() !== "") {
      login(userName);
      setUserName("");
    } else {
      alert("Kamu belum Memasukan Nama anda")
    }
  }
  return (
    <div className="p-3 flex flex-col">
      {user ?
        (
          <h3 className="text-lime-50">Selamat Datang, {user.name}</h3>
        ) : (
          <>
            <input type="text" placeholder="Masukan Nama anda broo va" value={userName} onChange={(e) => setUserName(e.target.value)}  className="border m-3 rounded p-1"/>
            <button onClick={handleLogin} className="bg-blue-400 rounded">Login</button>
          </>
        )
      }
    </div>
  );
}
