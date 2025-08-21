import { useEffect, useRef, useState } from "react";

export function UseRef() {
  const inputRef = useRef(null);
  const inputNama = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputNama.current.focus();
  }, []);
  return (
    <>
      <div className="p-4">
        <input type="text" ref={inputRef} className="border p-2 rounded" placeholder="Ketik sesuatu" />
        <button onClick={focusInput} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
          Fokuskan Input
        </button>
      </div>
      <input type="text" placeholder="Nama Lengkap" ref={inputNama} />
    </>
  );
}

export function WaktuApp() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };


  // mengambil data sebelum 
  const [count, setCount] = useState(0)
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  },[count])

  const prevCount = prevCountRef.current; // ini kenapa ko harus current dulu kenapa ga langsunga kenapa ko objek ga bisa ditampil?
  return (
    <>
      <h1>heloo kawan waktu Maju {time}</h1>
      <button className="p-2 bg-blue-500 m-1 text-white hover:bg-blue-600 " onClick={start}>
        Start
      </button>
      <button className="p-2 bg-blue-500 m-1 text-white hover:bg-blue-600 " onClick={stop}>
        stop
      </button>
      <button className="p-2 bg-blue-500 m-1 text-white hover:bg-blue-600 " onClick={reset}>
        reset
      </button>
      <h1>tes Dua Kawan Sekarang {count} yang lalu {prevCount === undefined ? "N/A" : prevCount}</h1>
      <button onClick={() => setCount(c => c +1)}>Tambah</button>

    </>
  );
}
