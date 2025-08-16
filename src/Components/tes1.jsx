import { useState } from "react";

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
    setLogin(currentStatus => !currentStatus)
  }

  const [notifPesan, setNotifPesan] = useState(false);

  const handlePesan = () => {
    setNotifPesan(current => !current)
  }

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