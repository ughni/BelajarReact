import {  useMemo, useState } from "react";

// const kalkulasiLambat = (angka) => {
//   console.log("heii, Aku jalan lagi nih (Kalkulasi Berat)");
//   for (let i = 0; i < 1000000000; i++);
//   return angka * angka;
// };

// export function Case4() {
//   const [angka, setAngka] = useState(1);
//   const [temaDark, setTemaDark] = useState(false);

//   const hasilKalkulasi = kalkulasiLambat(angka);

//   const gayaTema = {
//     backgroundColor: temaDark ? "#333" : "#fff",
//     color: temaDark ? "#fff" : "#333",
//     padding: "2rem",
//     minHeight: "100vh",
//   };

//   return (
//     <div className={gayaTema}>
//       <h2>Contoh Tanpa useMemo (Masalah)</h2>
//       <input type="number" value={angka} onChange={(e) => setAngka(parseInt(e.target.value))} />
//       <p>
//         Hasil Pangkat Dua dari {angka} Adalah {hasilKalkulasi}
//       </p>
//       <hr />

//       <button onClick={() => setTemaDark(!temaDark)}>Ubah Tema</button>
//       <p>coba Kalik tombol "Ubah Tema" dan rasakan jeda/lag. lihat juga di console.log</p>
//     </div>
//   );
// }


const kalkulasiLambats= (angka) => {
  console.log("Heii, Aku jalan lagi nih (kalkulasi berat)");
  for (let i = 0; i < 1000000000; i++);
  return angka * angka;
}


export function Case5() {
  const [angkas, setAngkas] = useState(1)
  const [temaDarks, setTemaDarks] = useState(false);

  const hasilKalkulasiData = useMemo(() => {
    return kalkulasiLambats(angkas)
  },[angkas])

  const gayaTemas = {
    backgroundColor: temaDarks ? '#333' : '#FFF',
    color: temaDarks ? '#FFF' : '#333',
    padding: '2rem',
    minHeight: '100vh',
  };


  return (
    <>
      <div style={gayaTemas}>
        <h2>Contoh dengan useMemo (solusi)</h2>
        <input type="number" value={angkas} onChange={e => setAngkas(parseInt(e.target.value))} />
        <p>hasil Kalkulasi dari Dua angka {angkas}  adalah {hasilKalkulasiData}</p>
        <br /><hr />
        <button onClick={() => setTemaDarks(!temaDarks)}>ubah tema</button>

      </div>
    </>
  )
}

