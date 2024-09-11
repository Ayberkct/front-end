/* eslint-disable react/prop-types */
function Footer(props) {
  const { currentData } = props;
  const footerTitle = currentData.footer.footerTitle;
  const footerNav_1 = currentData.footer.footerNav_1;
  const footerNav_2 = currentData.footer.footerNav_2;
  const footerNav_3 = currentData.footer.footerNav_3;
  const footerNav_4 = currentData.footer.footerNav_4;

  return (
    <div className='flex'>
      <div>
        <h3>{footerTitle}</h3>
      </div>
      <div>
        <div>{footerNav_1}</div>
        <div>{footerNav_2}</div>
        <div>{footerNav_3}</div>
        <div>{footerNav_4}</div>
      </div>
    </div>
  );
}

export default Footer;
