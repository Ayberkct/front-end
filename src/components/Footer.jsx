/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useGlobalContext } from "../context/GlobalContext";
function Footer(props) {
  const { currentData } = useGlobalContext();
  const { footerTitle, footerNav, handleNavigate } = currentData?.footer || {};

  return (
    <div className='flex justify-center items-center pt-16 pb-16 flex-wrap dark:text-white'>
      <div>
        <h3 className=' text-5xl w-[541px] h-[126px]'>{footerTitle}</h3>
      </div>
      <div>
        {footerNav &&
          footerNav.map((item, index) => {
            return (
              <div
                onClick={() => handleNavigate(item.url)}
                style={{ color: item.colorClass }}
                key={index}
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Footer;
