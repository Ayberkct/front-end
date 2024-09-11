/* eslint-disable react/prop-types */
function Section(props) {
  const { systemLanguage } = props;
  const greeting = systemLanguage?.section?.greeting;
  const intro = systemLanguage?.section?.intro;
  const profilImg = systemLanguage?.section.profil_img;
  const sectionInfo = systemLanguage?.section.sectionInfo;
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
