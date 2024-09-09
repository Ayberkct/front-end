/* eslint-disable react/prop-types */
function Headers(props) {
  const { darkMode, setDarkMode } = props;
  const handleThemeSwitch = () => {
    if (darkMode === true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  return (
    <>
      <button onClick={handleThemeSwitch}>darkmode</button>
    </>
  );
}

export default Headers;
