/* eslint-disable react/prop-types */
import Headers from "../components/Headers";
import Section from "../components/Section";
import Skils from "../components/Skils";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

function Main(props) {
  const {
    darkMode,
    setDarkMode,
    languageData,
    setLanguageData,
    systemLanguage,
  } = props;

  return (
    <div className='dark:bg-black'>
      <Headers
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        languageData={languageData}
        setLanguageData={setLanguageData}
      />
      <Section systemLanguage={systemLanguage} />
      <Skils systemLanguage={systemLanguage} />
      <Profile systemLanguage={systemLanguage} />
      <Projects systemLanguage={systemLanguage} />
      <Footer systemLanguage={systemLanguage} />
    </div>
  );
}

export default Main;
