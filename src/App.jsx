import { useEffect, useState } from "react";
import "./App.css";
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
  const [currentData, setCurrentData] = useState(); // tek bir dildeki internet sayfa içeriği
  const [systemLanguage, setSystemLanguage] = useState(() => {
    const userLang = navigator.language || navigator.userLanguage;

    return userLang.includes("tr") ? "tr" : "en";
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
        systemLanguage={systemLanguage}
        setSystemLanguage={setSystemLanguage}
      />
      <Section currentData={currentData} />
      <Skils currentData={currentData} />
      <Profile currentData={currentData} />
      <Projects currentData={currentData} />
      <Footer currentData={currentData} />
    </div>
  );
}

export default App;
