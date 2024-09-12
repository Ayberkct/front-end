/* eslint-disable react/prop-types */
function Footer(props) {
  const { currentData } = props;
  const footerTitle = currentData.footer.footerTitle;
  const footerNav_1 = currentData.footer.footerNav_1;
  const footerNav_2 = currentData.footer.footerNav_2;
  const footerNav_3 = currentData.footer.footerNav_3;
  const footerNav_4 = currentData.footer.footerNav_4;

  return (
    <div className='flex justify-center items-center pt-16 pb-16 flex-wrap dark:text-white'>
      <div>
        <h3 className=' text-5xl w-[541px] h-[126px]'>{footerTitle}</h3>
      </div>
      <div>
        <div className='text-customBlueText'>{footerNav_1}</div>
        <div>{footerNav_2}</div>
        <div className='text-customGreenText'>{footerNav_3}</div>
        <div className='text-custom-purple'>{footerNav_4}</div>
      </div>
    </div>
  );
}

export default Footer;
