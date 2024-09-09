/* eslint-disable no-unused-vars */
import Headers from "../components/Headers";
import Section from "../components/Section";
import Skils from "../components/Skils";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

function Main(props) {
  // eslint-disable-next-line react/prop-types
  const { darkMode, setDarkMode } = props;
  return (
    <>
      <Headers />
      <Section />
      <Skils />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

export default Main;
