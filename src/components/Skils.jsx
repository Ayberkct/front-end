/* eslint-disable react/prop-types */
function Skils(props) {
  const { currentData } = props;
  const skilsTitle = currentData.skils.title;
  return (
    <>
      <h2>{skilsTitle}</h2>
    </>
  );
}

export default Skils;
