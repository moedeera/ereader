import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState("");

  const [bg, setBg] = useState("dark");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

      setBg(theme);

      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(bg));
  }, [bg]);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <SiteContext.Provider
      value={{ mode, setMode, user, setUser, logout, bg, setBg }}
    >
      {children}
    </SiteContext.Provider>
  );
};
