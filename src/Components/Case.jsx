import { useState } from "react";

export default function Case() {
  const [inputUser, setInputUser] = useState([]);
  const [datas, setDatas] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (datas === "") {
      alert("anda belum memasukan data coba diisi");
      return;
    };
    setInputUser([...inputUser, datas]);
    console.log(inputUser);
  };

  return (
    <>
      <h1>todo List</h1>
      {/* form input dari user  */}
      <form action="" onSubmit={handleSubmit}>
        <input type="text"  onChange={(e) => setDatas(e.target.value)} />

        <button type="submit">Kirim</button>
      </form>
      <ul>
        {
          inputUser.map((item, index) => (
            <li key={index}>{ item} <button >Hapus</button></li>
  )) 
        }
      </ul>
    </>
  );
}
