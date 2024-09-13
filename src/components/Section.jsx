/* eslint-disable no-unused-vars */
import { useGlobalContext } from "../context/GlobalContext";

/* eslint-disable react/prop-types */
function Section(props) {
  const { currentData } = useGlobalContext();
  const greeting = currentData.section.greeting;
  const intro = currentData.section.intro;
  const profilImg = currentData.section.profil_img;
  const sectionInfo = currentData.section.sectionInfo;

  return (
    <section className='bg-customGray dark:bg-customDarkGray dark:text-white'>
      <div className='relative w-[1107px] h-[493px]  gap-0 opacity-100 mx-auto mt-0 mb-[151px] flex flex-col'>
        <div className='flex  w-full'>
          <div className='w-[666px] h-[256px]'>
            <h2 className='text-3xl'>{greeting}</h2>
            <p className='text-4xl'> {intro}</p>
          </div>
          <div>
            <img src={profilImg} alt='Profil Resmi' />
          </div>
        </div>
        <div className='w-[540px] h-[122.57px]'>
          <div className='text-3xl '>
            <i className='fa-brands fa-linkedin-in '></i>
            <i className='fa-brands fa-github ml-4'></i>
          </div>
          <p className='mt-4'>{sectionInfo}</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
