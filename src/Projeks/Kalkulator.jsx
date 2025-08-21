import { useState } from "react";

export default function Kalkulator() {
  const [display, setDisplay] = useState("");
  const [angka1, setAngka1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [hasil, setHasil] = useState(null);

  // hasil klik angka
  const handleNumber = (e) => {
    setDisplay(display + e.target.textContent);
  };

  const handleOperator = (e) => {
    setAngka1(parseFloat(display));
    setOperator(e.target.textContent);
    setDisplay("");
  };

  const handleEqual = () => {
    const angka2 = parseFloat(display);
    let result = 0;

    switch (operator) {
      case "+":
        result = angka1 + angka2;
        break;
      case "-":
        result = angka1 - angka2;
        break;
      case "x":
        result = angka1 * angka2;
        break;
      case "/":
        result = angka1 / angka2;
        break;
      default:
        return;
    }
    setHasil(result);
    setDisplay(result.toString());
  };

  const tombolAngka = [];
  for (let i = 0; i <= 9; i++) {
    tombolAngka.push(
      <button key={i} onClick={handleNumber} className="bg-blue-500 font-bold py-2 px-2 rounded transition-all duration-300 hover:bg-blue-700 hover:scale-110">
        {i}
      </button>
    );
  }

  const handleHapus = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-300">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <h2>Kalkulator</h2>
          <div className="bg-gray-500 rounded-lg p-4 mb-4 text-right text-2xl font-mono text-gray-700">
              {display || "0"}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {tombolAngka}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {["+", "-", "x", "/"].map(op => (
              <button
                key={op}
                onClick={handleOperator}
                className="bg-orange-500 text-white font-bold py-3 px-3 rounded-lg shadow-md hover:scale-105  hover:bg-orange-600 transition duration-200"
              >{op}</button>
            ))}
            
            <button className="col-span-2 bg-green-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:scale-105 hover:bg-red-600 transition duration-200" onClick={handleEqual}>
              =
            </button>
            <button className="mt-6 bg-red-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:scale-105 hover:bg-red-600 transtion duration-200" onClick={handleHapus}>
              Hapus
            </button>
          </div>
          <h1 className="mt-6 text-xl text-center text-gray-700">Hasil : <span className="font-bold">{ hasil ?? "-"}</span></h1>
        </div>
      </div>
    </>
  );
}
