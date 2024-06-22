import { createContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
