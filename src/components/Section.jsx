/* eslint-disable react/prop-types */
function Section(props) {
  const { currentData } = props;
  const greeting = currentData.section.greeting;
  const intro = currentData.section.intro;
  const profilImg = currentData.section.profil_img;
  const sectionInfo = currentData.section.sectionInfo;
  return (
    <div>
      <h2>{greeting}</h2>
      <div>
        <p>{intro}</p>
        <img src={profilImg} alt='Profil Resmi' />
      </div>
      <i className='fa-brands fa-linkedin-in'></i>
      <i className='fa-brands fa-github'></i>
      <p>{sectionInfo}</p>
    </div>
  );
}

export default Section;
