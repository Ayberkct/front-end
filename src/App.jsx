import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Main from "./pages/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <Switch>
        <Route exact path='/main'>
          <Main darkMode={darkMode} setDarkMode={setDarkMode} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
