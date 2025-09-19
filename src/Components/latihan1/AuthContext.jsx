import { createContext, useState } from "react";
// bikin context 
 const AuthContext = createContext();

// provider
export function AuthProvider ({children}) {
  const [user, setUser] = useState(null);

  const login = (userName) => {
    setUser({name: userName})
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export { AuthContext };