import { useMemo, useState } from "react";

// Di sini kita import data yang menggunakan properti 'name'
import { dataProduk } from "../../datas/dataProduk";

export default function ProductDashboard() {
  const [products] = useState(dataProduk);
  const [searchProduct, setSearchProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredProducts = useMemo(() => {
    console.log("Proses Filtering Produk");
    return products.filter((product) => {
      // ini yang satu menyocokan apakah semua ditampilkan semua dan ke dua itu cek mau di tampilkan katagori apa
      const cocokKategori = selectedCategory === "Semua" || product.category === selectedCategory;

      // ini bertujuan untuk sih user mencari produknya
      const cocokPencarian = product.name?.toLowerCase().includes(searchProduct.toLowerCase()) || false;

      return cocokKategori && cocokPencarian;
    });
  }, [products, searchProduct, selectedCategory]);

  const totalValue = useMemo(() => {
    console.log("Menghitung ulang total nilai..");
    return filteredProducts.reduce((sum, product) => sum + product.price, 0);
  }, [filteredProducts]);

  const theme = {
    backgroundColor: isDarkMode ? "#282c34" : "#fff",
    color: isDarkMode ? "white" : "black",
    padding: "20px",
    transition: "all 0.3s",
  };

  return (
    <div style={theme}>
      <h2>Dashboard Produk</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Mode Terang" : "Mode Gelap"}</button>

      <hr />

      <input type="text" placeholder="Cari produk..." onChange={(e) => setSearchProduct(e.target.value)} style={{ marginRight: "10px" }} />

      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="Semua">Semua Kategori</option>
        <option value="Elektronik">Elektronik</option>
        <option value="Pakaian">Pakaian</option>
        <option value="Buku">Buku</option>
      </select>

      <h3>Ringkasan</h3>
      <p>
        Total Nilai Produk Ditampilkan: <strong>Rp {totalValue.toLocaleString("id-ID")}</strong>
      </p>

      <h3>Daftar Produk ({filteredProducts.length} item)</h3>

      <ul style={{ maxHeight: "300px", overflowY: "auto" }}>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - Rp {p.price.toLocaleString("id-ID")}
          </li>
        ))}
      </ul>
      <p style={{ fontStyle: "italic" }}>Buka console dan perhatikan kapan log "filtering" dan "menghitung total" muncul.</p>
    </div>
  );
}
// bikin web mencari filem dengan pake fitur menjadi apapun itu