/* eslint-disable react/prop-types */
function Headers(props) {
  const { darkMode, setDarkMode, systemLanguage, setSystemLanguage } = props;
  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
  };
  const handleLanguageSwitch = () => {
    setSystemLanguage(systemLanguage === "tr" ? "en" : "tr");
  };

  return (
    <>
      <header className='w-full h-1/8  dark:bg-stone-800 text-white  top-0 left-0 flex justify-end items-center p-4'>
        <div className='flex text-base text-zinc-500 justify-center items-center'>
          <label className='inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              onClick={handleThemeSwitch}
              className='sr-only peer'
            />
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className='ms-3  font-medium dark:text-gray-300'>
              {darkMode === true ? "Light Mode  |" : "Dark Mode  |"}
            </span>
          </label>
          <div onClick={handleLanguageSwitch} className='cursor-pointer pl-4'>
            {systemLanguage === "tr" ? "İngilizce'ye geç" : "Türkçe'ye geç"}
          </div>
        </div>
      </header>
    </>
  );
}

export default Headers;
