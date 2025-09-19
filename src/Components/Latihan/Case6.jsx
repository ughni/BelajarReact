import { Children, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { dataProduk } from "../../datas/dataProduk";
import { BrowserRouter, Link } from "react-router-dom";

export function Pencarian() {
  const [keyword, setKeyword] = useState("");
  const fokusRef = useRef(null);

  useEffect(() => {
    fokusRef.current.focus();
  }, []);

  const mesinControl = useMemo(() => {
    return dataProduk.filter((produk) => {
      const pencarian = produk.name?.toLowerCase().includes(keyword.toLowerCase());
      return pencarian;
    });
  }, [keyword]);

  return (
    <div className="p-2 m-2 ">
      <input type="text" ref={fokusRef} placeholder="Pencarian Produk" onChange={(e) => setKeyword(e.target.value)} />
      <ul>
        {mesinControl.length > 0 ? (
          mesinControl.map((e) => (
            <li key={e.id}>
              Nama Produk {e.name} <span>Stop {e.price}</span>{" "}
            </li>
          ))
        ) : (
          <p>Ga ada produk anda yang dicari</p>
        )}
      </ul>
    </div>
  );
}

const DataSemua = createContext(null);

export function Peradapan() {
  const [user, setUser] = useState(null);

  const login = (userName) => {
    setUser({ name: userName });
  };

  return (
    <DataSemua.Provider value={{ user, login }}>
      <Navbar />
      <Login />
    </DataSemua.Provider>
  );
}

function Navbar() {
  const { user } = useContext(DataSemua);
  return (
    <>
      <nav className="p-2 flex justify-between">
        <h1 className="font-bold">Polytron</h1>
        <ul className="grid gap-1 grid-cols-3">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contect</a>
        </ul>
        <div className="p-1">{user ? <h1>kamu sudah Login {user.name}</h1> : <p>Kamu belum Login</p>}</div>
      </nav>
    </>
  );
}

function Login() {
  const { user, login } = useContext(DataSemua);
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    if (userName.trim() !== "") {
      login(userName);
      setUserName("");
    } else {
      alert("kamu belum memasukan Nama anda");
    }
  };

  return (
    <>
      {user ? (
        <h2> Selamat Datang {user.name}</h2>
      ) : (
        <>
          <form className="p-2 grid grid-cols-2 gap-2" onSubmit={handleLogin}>
            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Masukin Nama" className="border p-2" />
            <button className="bg-blue-200 p-1 text-black rounded">Kirim</button>
          </form>
        </>
      )}
    </>
  );
}

function HalamanBeranda() {
  return <h2>ini halaman beranda</h2>;
}

function HalamanProfil() {
  return <h2>Ini halaman</h2>;
}

function Inti() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Ke Berabda</Link>
        </nav>
      </BrowserRouter>
    </>
  );
}
