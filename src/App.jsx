/* eslint-disable no-unused-vars */
import "./App.css";

import Headers from "./components/Headers";
import Section from "./components/Section";
import Skils from "./components/Skils";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className=' dark:bg-customGrayBg	'>
        <Headers />
        <Section />
        <Skils />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
