import { useState } from "react"
import PesanUser from "./Pesan";

export default function NotifikasiPesan() {
  const [notifikasi, setNotifikasi] = useState(false)
  const handleKirim = (e) => {
    e.preventDefault()
    setNotifikasi(current => !current);
  }

  return (
    <>
      <div className="flex">
        <PesanUser onClick={handleKirim}/>
        {notifikasi ? "kamu udah kirim": "belum kirim" }
      </div>
    </>
  );
}


