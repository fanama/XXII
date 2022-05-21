import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [idUser, setIdUser] = useState<string>("");

  useEffect(() => {
    setIdUser(localStorage.getItem("idUser") || "0");
  }, []);

  const updateIdUser = (idUser: string) => {
    setIdUser(idUser);
    localStorage.setItem("idUser", idUser);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return {
    idUser,
    updateIdUser,
    clearLocalStorage,
  };
}
