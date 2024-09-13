/* eslint-disable no-unused-vars */
import { useGlobalContext } from "../context/GlobalContext";

/* eslint-disable react/prop-types */
function Profile(props) {
  const { currentData } = useGlobalContext();
  const profileTitle = currentData.profile.title;
  const cardTitle = currentData.profile.cardTitle;
  const date = currentData.profile.date;
  const city = currentData.profile.city;
  const educationStatus = currentData.profile.educationStatus;
  const prefferredRol = currentData.profile.preferredRol;
  const aboutTitle = currentData.profile.aboutTitle;
  const aboutContent = currentData.profile.aboutContent;

  return (
    <div className='bg-customGray p-12 min-h-fit flex flex-col items-center dark:bg-customDarkGray  dark:text-white'>
      <h2 className='text-4xl mb-12'>{profileTitle}</h2>
      <div className='flex gap-8'>
        <div className='bg-white rounded-lg shadow-2xl w-[508px] h-[322px] p-6 dark:bg-customGrayBg'>
          <h3 className='text-2xl text-custom-purple mb-4'>{cardTitle}</h3>
          <div className='flex gap-12'>
            <div className='flex flex-col space-y-2'>
              <p>{date}</p>
              <p>{city}</p>
              <p>{educationStatus}</p>
              <p>{prefferredRol}</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <p>24.12.1996</p>
              <p>Sakarya</p>
              <p>Lisans</p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className=' w-[476px] h-[241px] p-6'>
          <h2 className='text-2xl mb-4'>{aboutTitle}</h2>
          <p>{aboutContent}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
