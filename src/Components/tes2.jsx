import { useState } from "react";

export function Tes2() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const heandleChage = (e) => {
    setInput(e.target.value);
  };

  const heandleSubmit = (e) => {
    e.preventDefault();
    alert(`input dari kamu ${input}`);
    if (!input) return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <>
      <p>{items}</p>
      <h1>{input}</h1>
      <form action="" onSubmit={heandleSubmit}>
        <input type="text" onChange={heandleChage} />
        <button type="submit">Kirim</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h1>heloo</h1>
    </>
  );
}

export function TesProps({ onButtonClick }) {
  return (
    <>
      <h1>helo</h1>
      <button onClick={onButtonClick}>Kirim</button>
    </>
  );
}
