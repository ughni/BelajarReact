import { useState } from "react";
import "../assets/Todolist.css";

export default function TodoList() {
  const [inputUser, setInputUser] = useState("");
  const [dataList, setDataList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUser.trim()) return;
    setDataList([...dataList, inputUser]);
    setInputUser("");
  };
  const handleChange = (e) => {
    setInputUser(e.target.value);
  };

  const hapusList = (index) => {
    const newList = dataList.filter((_, i) => i !== index); // ['nama','tikus']; 2 apakah benar hasilnya true
    setDataList(newList);
  };

  return (
    <>
      <div className="todo-app-container">
        <header>
          <h1>Jadwal Harian</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              value={inputUser} // Tambahkan value untuk mengontrol input
              placeholder="Apa rencanamu hari ini?"
            />
            <button type="submit">Tambah</button> {/* Ganti ikon dengan teks */}
          </form>
        </header>

        <main>
          <ol>
            {dataList.map((item, index) => (
              <li key={index}>
                <span>{item}</span> {/* Bungkus teks dengan span */}
                <button onClick={() => hapusList(index)}>Hapus</button>
              </li>
            ))}
          </ol>
        </main>
      </div>
    </>
  );
}
