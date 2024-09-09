import { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Main from "./pages/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path='/main'>
          <Main darkMode={darkMode} setDarkMode={setDarkMode} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
