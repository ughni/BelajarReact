import { useEffect, useState } from "react";

export function CekUserketik() {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    console.log(`anda click tombo : ${e.key}`);
    if (e.key === "Enter") {
      e.preventDefault();
      alert(`kamu ketik ${value}`);
      setValue("");
    }
  };

  return (
    <>
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h3>studi kasus kalo click enter ada reaksi</h3>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
      </div>
      <MoveBox />
      <Move/>
    </>
  );
}

function MoveBox() {
  const [position, setPosition] = useState("");
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        setPosition((prevPosition) => prevPosition - 10);
        break;
      case "ArrowRight":
        setPosition((prevPosition) => prevPosition + 10);
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      console.log(`tombol Dilspaskan : ${e.key} 🖐🏻`);
    }
  };

  useEffect(() => {
    const container = document.getElementById("moveble-container");
    if (container) {
      container.focus;
    }
  }, []);

  return (
    <div
      id="moveble-container"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex="0"
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        outline: "none", // Menghilangkan outline biru saat focus
        position: "relative", // Penting untuk posisi absolut anak
        height: "100px",
      }}
    >
      <h3>Studi Kasus 2: Gerakkan Kotak</h3>
      <p>Klik di area ini, lalu gunakan tombol panah ← dan →.</p>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "tomato",
          position: "absolute",
          left: `${position}px`, // Posisi dinamis berdasarkan state
          transition: "left 0.1s linear", // Animasi perpindahan yang mulus
        }}
      ></div>
    </div>
  );
}




function Move() {
  // State untuk menyimpan posisi horizontal kotak
  const [position, setPosition] = useState(0);

  // Fungsi untuk menangani event onKeyDown
  const handleKeyDown = (event) => {
    // Menggunakan switch untuk kode yang lebih rapi
    switch (event.key) {
      case 'ArrowLeft':
        // Update posisi ke kiri sebanyak 10px
        setPosition(prevPosition => prevPosition - 10);
        break;
      case 'ArrowRight':
        // Update posisi ke kanan sebanyak 10px
        setPosition(prevPosition => prevPosition + 10);
        break;
      default:
        break;
    }
  };

  // Fungsi untuk menangani event onKeyUp
  const handleKeyUp = (event) => {
    // Kita hanya akan menampilkan log di console saat tombol dilepas
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      console.log(`Tombol dilepaskan: ${event.key} 👋`);
    }
  };
  
  // Memberi fokus ke div saat komponen pertama kali dimuat
  useEffect(() => {
    const container = document.getElementById('movable-container');
    if (container) {
      container.focus();
    }
  }, []);

  return (
    <div 
      id="movable-container"
      onKeyDown={handleKeyDown} 
      onKeyUp={handleKeyUp}
      // 'tabIndex' penting agar div bisa menerima 'focus' dan event keyboard
      tabIndex="0" 
      style={{ 
        marginTop: '20px',
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        outline: 'none', // Menghilangkan outline biru saat focus
        position: 'relative', // Penting untuk posisi absolut anak
        height: '100px'
      }}
    >
      <h3>Studi Kasus 2: Gerakkan Kotak</h3>
      <p>Klik di area ini, lalu gunakan tombol panah ← dan →.</p>
      <div 
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'tomato',
          position: 'absolute',
          left: `${position}px`, // Posisi dinamis berdasarkan state
          transition: 'left 0.1s linear' // Animasi perpindahan yang mulus
        }}
      ></div>
      
    </div>
  );
}
