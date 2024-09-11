/* eslint-disable react/prop-types */
function Headers(props) {
  const { darkMode, setDarkMode, languageData, setLanguageData } = props;
  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
  };
  const handleLanguageSwitch = () => {
    setLanguageData(languageData === "tr" ? "en" : "tr");
  };

  return (
    <>
      <div className='absolute top-0 right-0 mr-20 border-2 border-indigo-600 p-2 rounded'>
        <label className='opocity-0 inline-block w-16 h-4 '>
          <input
            type='checkbox'
            onClick={handleThemeSwitch}
            className='opocity-0  w-0 h-0 '
          />
          <span className='slider round'></span>
        </label>
        <p>{darkMode === true ? "Light Mode" : "Dark Mode"}|</p>
      </div>

      <div onClick={handleLanguageSwitch} className='cursor'>
        {languageData === "tr" ? "İngilizce'ye geç" : "Türkçe'ye geç"}
      </div>
    </>
  );
}

export default Headers;
