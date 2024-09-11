import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import axios from "axios";
import { languageDataDefault } from "./data";
import Headers from "./components/Headers";
import Section from "./components/Section";
import Skils from "./components/Skils";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [languageData, setLanguageData] = useState("tr");
  const [currentData, setCurrentData] = useState(); // tek bir dildeki internet sayfa içeriği
  const [systemLanguage, setSystemLanguage] = useState(() => {
    const userLang = navigator.language || navigator.userLanguage;
    //userLang içinde tr varsa return tr else return en
    return "tr";
  }); // kullanıcının o sıradaki dil tercihi

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
  if (loading) {
    return "yükleniyor";
  }
  return (
    <div className='dark:bg-black'>
      <Headers
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        languageData={languageData}
        setLanguageData={setLanguageData}
      />
      <Section systemLanguage={currentData} />
      <Skils systemLanguage={currentData} />
      <Profile systemLanguage={currentData} />
      <Projects systemLanguage={currentData} />
      <Footer systemLanguage={currentData} />
    </div>
  );
}

export default App;
