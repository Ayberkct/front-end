/* eslint-disable react/prop-types */
function Section(props) {
  const { systemLanguage } = props;
  const greeting = systemLanguage?.section?.greeting;
  const intro = systemLanguage?.section?.intro;
  return (
    <div>
      <h2>{greeting}</h2>
      <div>
        <p>{intro}</p>
        <img src='../public/foto.png' alt='' />
      </div>
      <i className='fa-brands fa-linkedin-in'></i>
      <i className='fa-brands fa-github'></i>
      <p>Currently Freelancing for UX, UI, & Web Design Project</p>
      <p>Invite me to join your team -&gt; pratamaiosi@gmail.com</p>
    </div>
  );
}

export default Section;
