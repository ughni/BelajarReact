import { useEffect, useRef, useState } from "react";

export default function PomodoroApp() {
  const [inputRef, setInputRef] = useState("");
  const [datas, setDatas] = useState([]);
  const fokusInput = useRef(null);
  const [waktu, setWaktu] = useState(150);
  const perhitunganWaktu = useRef(null);

  useEffect(() => {
    fokusInput.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.trim() === "") return;
    setDatas([...datas, inputRef]);
    setInputRef("");
  };

  const hapusCatatan = (idx) => {
    setDatas(datas.filter((_, i) => i !== idx));
  };

  // pomodoro
  const start = () => {
    if (waktu === 0) {
      stop();
      alert("waktu Habis waktunya kamu istrirahat");
    } else if (!perhitunganWaktu.current) {
      perhitunganWaktu.current = setInterval(() => {
        setWaktu((prev) => {
          if (prev <= 1) {
            stop();
            alert("waktu habis, saatnya istirahat");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(perhitunganWaktu.current);
    perhitunganWaktu.current = null;
  };

  const reset = () => {
    stop();
    setWaktu(150);
  };

  const menit = Math.floor(waktu / 60);
  const detik = waktu % 60;

  return (
    <div className="m-5 flex flex-col text-center">
      <div className="grid gap-2 grid-cols-6 ">
        <h1 className="col-span-4 col-start-2 bg-yellow-300 rounded">
          {" "}
          waktu : {waktu} {menit}:{detik.toString().padStart(2, "0")} Menit
        </h1>
        <button className="col-start-1 col-end-3 bg-green-300 rounded" onClick={start}>
          Start
        </button>
        <button className="col-span-2 col-end-7 bg-yellow-300 rounded" onClick={stop}>
          Stop
        </button>
        <button className="col-start-1 col-end-7 bg-red-500 rounded" onClick={reset}>
          Reset
        </button>
      </div>
      <form action="" onSubmit={handleSubmit} className="bg-blue-100 mt-3    grid-flow-col rounded-2xl grid gap-1 p-2">
        <input type="text" ref={fokusInput} onChange={(e) => setInputRef(e.target.value)} placeholder="Catatan..." className="border p-2  rounded-2xl " />
        <button type="submit" className="rounded-2xl hover:bg-blue-600 bg-blue-300 transition duration-150 ease-in-out hover:scale-102 font-bold ">
          Kirim
        </button>
      </form>
      <ol className="grid mt-1 gap-2">
        {datas.map((item, index) => (
          <li key={index} className="bg-blue-500 text-white rounded-2xl text-center p-2 flex items-center justify-between">
            <span className="text-center w-full">{waktu} Menit</span>
            <span className="text-center w-full">{item}</span>
            <span onClick={() => hapusCatatan(index)} className="m-2 bg-sky-50 cursor-pointer text-black hover:text-white hover:bg-sky-500 p-2 rounded">
              Hapus
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
// besok gimana caranya waktu  udah habis waktu selesai muncul alert dan lis todo nya ke hapus
