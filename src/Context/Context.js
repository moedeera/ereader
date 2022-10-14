import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase-config";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <SiteContext.Provider value={{ mode, setMode, user, setUser, logout }}>
      {children}
    </SiteContext.Provider>
  );
};
