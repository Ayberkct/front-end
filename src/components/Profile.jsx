/* eslint-disable react/prop-types */
function Profile(props) {
  const { currentData } = props;
  const profileTitle = currentData.profile.title;
  const cardTitle = currentData.profile.cardTitle;
  const date = currentData.profile.date;
  const city = currentData.profile.city;
  const educationStatus = currentData.profile.educationStatus;
  const prefferredRol = currentData.profile.prefferredRol;
  const aboutTitle = currentData.profile.aboutTitle;
  const aboutContent = currentData.profile.aboutContent;

  return (
    <div>
      <h2>{profileTitle}</h2>
      <div>
        <h3>{cardTitle}</h3>
        <p>{date}</p>
        <span>24.12.1996</span>
        <p>{city}</p>
        <span>Sakarya</span>
        <p>{educationStatus}</p>
        <span>Lisans</span>
        <p>{prefferredRol}</p>
        <span>Frontend, UI</span>
      </div>
      <div>
        <h2>{aboutTitle}</h2>
        <p>{aboutContent}</p>
      </div>
    </div>
  );
}

export default Profile;
