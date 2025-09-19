import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function Admin() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "drak" : "light"));

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    </>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header style={{ padding: 10, background: theme === "light" ? "#eee" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
        <h1>Header ({theme})</h1>
        <button onClick={toggleTheme}> Toggle</button>
      </header>
    </>
  );
}
