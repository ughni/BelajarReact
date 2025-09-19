import { useState, useRef, useEffect } from "react";

const dataBuah = ["Apel", "Anggur", "Alpukat", "Pisang", "Ceri", "Durian", "Jambu", "Jeruk", "Leci", "Mangga", "Manggis", "Melon", "Nanas", "Pepaya", "Rambutan", "Salak", "Semangka", "Stroberi",'mie ayam'];

export function FruitFilter() {
  const [keyword, setKeyword] = useState("");
  const fokusRef = useRef(null);

  useEffect(() => {
    fokusRef.current.focus();
  }, []);

  const fruitFilter = dataBuah.filter((fruit) => {
    return fruit.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <>
      <div className="mx-w-sm">
        <input type="text" ref={fokusRef} placeholder="Cari Buah...." onChange={(e) => setKeyword(e.target.value)} className="w-100 p-1 mb-2 border-2" />
        <ul>{fruitFilter.length > 0 ? fruitFilter.map((buah) => <li key={buah}>{buah}</li>) : <p>Ga ada buah yang kamu cari</p>}</ul>
      </div>
    </>
  );
}












export function Tes({ nama, alamat }) {
  return (
    <>
      <h1>data sat dari induk {nama}</h1>
      <h2>semua harus positif {alamat}</h2>
    </>
  );
}

export function ConditionalRendering() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((currentStatus) => !currentStatus);
  };

  const [notifPesan, setNotifPesan] = useState(false);

  const handlePesan = () => {
    setNotifPesan((current) => !current);
  };

  return (
    <>
      <div>
        {login ? <h1>kamu udah login</h1> : <h1>kamu belum login</h1>}
        <button onClick={handleLogin}>Login </button>
      </div>
      {notifPesan && <p>kamu punya Notification baru!</p>}
      <button onClick={handlePesan}>Kirim Pesan</button>
      jelo
    </>
  );
}
// cara kirim pesan nanti ada notifikasinya dari user
