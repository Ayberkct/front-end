/* eslint-disable react/prop-types */
import Headers from "../components/Headers";
import Section from "../components/Section";
import Skils from "../components/Skils";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

function Main(props) {
  const { darkMode, setDarkMode } = props;
  return (
    <div className='dark:bg-black'>
      <Headers darkMode={darkMode} setDarkMode={setDarkMode} />
      <Section />
      <Skils />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default Main;
