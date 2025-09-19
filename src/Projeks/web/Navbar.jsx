import { Route, Routes,Link } from "react-router-dom";
import Kontak from "./Kontak";
import Tokoh from "./Tokoh";
import Beranda from "./Beranda";

export function Navbar() {
  return (
    <>
        <nav className="p-2 flex justify-between">
          <h1 className="font-bold">Polytron</h1>
          <ul className="grid gap-1 grid-cols-3">
            <Link to="/">Home</Link>
            <Link to="/Tokoh">About</Link>
            <Link to="/Kontak">Contect</Link>
          </ul>
          <div className="p-1">anda belum login</div>
        </nav>

      <Routes>
<Route path="/" element={<Beranda/>} />
        <Route path="/about" element={ <Tokoh/>} />
        <Route path="/kontak" element={ <Kontak/>} />
    </Routes>
    </>
  );
}
