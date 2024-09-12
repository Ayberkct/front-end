/* eslint-disable react/prop-types */
function Projects(props) {
  const { currentData } = props;
  const projectsTitle = currentData.projects.projectTitle;
  const projectCard_1_title = currentData.projects.projectCard_1.title;
  const projectCard_1_explain = currentData.projects.projectCard_1.explain;
  const projectCard_1_navigation =
    currentData.projects.projectCard_1.navigation;
  const projectCard_1_appNavi = currentData.projects.projectCard_1.appNavi;
  const projectCard_1_img = currentData.projects.projectCard_1.img;
  const projectCard_2_title = currentData.projects.projectCard_2.title;
  const projectCard_2_explain = currentData.projects.projectCard_2.explain;
  const projectCard_2_navigation =
    currentData.projects.projectCard_2.navigation;
  const projectCard_2_appNavi = currentData.projects.projectCard_2.appNavi;
  const projectCard_2_img = currentData.projects.projectCard_2.img;
  return (
    <div className=' dark:text-white'>
      <h2 className='text-4xl flex justify-center pt-8 pb-8 '>
        {projectsTitle}
      </h2>
      <div className='flex justify-center items-center gap-16'>
        <div className=' relative max-w-sm border border-gray-200 rounded-lg shadow bg-customBlue dark:bg-gray-800 dark:border-gray-700 p-8 w-[500px] h-[668px] '>
          <h3 className='text-3xl pb-4'>{projectCard_1_title}</h3>
          <p>{projectCard_1_explain}</p>
          <div className='flex gap-4 pt-4 pb-16'>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              react
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              vercel
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              axios
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              router
            </p>
          </div>
          <div className='flex justify-between mb-16'>
            <p>{projectCard_1_navigation}</p>
            <div>{projectCard_1_appNavi}</div>
          </div>
          <img
            className=' absolute w-[500px] h-[287px] object-cover bottom-0 left-0'
            src={projectCard_1_img}
            alt=''
          />
        </div>
        <div className='relative max-w-sm border border-gray-200 rounded-lg shadow bg-customBlue dark:bg-gray-800 dark:border-gray-700 p-8 w-[500px] h-[668px]'>
          <h3 className='text-3xl pb-4'>{projectCard_2_title}</h3>
          <p>{projectCard_2_explain}</p>
          <div className='flex gap-4 pt-4 pb-8 flex-wrap'>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              react
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              vercel
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              axios
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              router
            </p>
            <p className='border w-fit bg-white pt-1 pr-4 pb-1 pl-4 flex justify-center items-center rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
              vercel
            </p>
          </div>
          <div className='flex justify-between mb-16'>
            <p>{projectCard_2_navigation}</p>
            <div>{projectCard_2_appNavi}</div>
          </div>
          <img src={projectCard_2_img} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
