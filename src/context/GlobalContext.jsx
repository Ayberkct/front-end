/* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from "react";

import axios from "axios";
import { languageDataDefault } from "../data";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentData, setCurrentData] = useState();
  const [systemLanguage, setSystemLanguage] = useState(() => {
    const userLang = navigator.language || navigator.userLanguage;

    return userLang.includes("tr") ? "tr" : "en";
  });

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    setLoading(true);
    axios
      .post("https://reqres.in/api/users", languageDataDefault[systemLanguage])
      .then((response) => {
        setCurrentData(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [systemLanguage]);

  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
  };
  const handleLanguageSwitch = () => {
    setSystemLanguage(systemLanguage === "tr" ? "en" : "tr");
  };

  const handleNavigate = (url) => {
    window.location.href = url;
  };

  if (loading) {
    return "yükleniyor";
  }

  return (
    <GlobalContext.Provider
      value={{
        loading,
        darkMode,
        currentData,
        setDarkMode,
        systemLanguage,
        setSystemLanguage,
        handleLanguageSwitch,
        handleThemeSwitch,
        handleNavigate,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
