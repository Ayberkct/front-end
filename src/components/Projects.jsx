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
    <>
      <h2>{projectsTitle}</h2>
      <div>
        <h3>{projectCard_1_title}</h3>
        <p>{projectCard_1_explain}</p>
        <p>react</p>
        <p>vercel</p>
        <p>axios</p>
        <p>router</p>
        <div className='flex'>
          <p>{projectCard_1_navigation}</p>
          <div>{projectCard_1_appNavi}</div>
        </div>
        <img src={projectCard_1_img} alt='' />
      </div>
      <div>
        <h3>{projectCard_2_title}</h3>
        <p>{projectCard_2_explain}</p>
        <p>react</p>
        <p>redux</p>
        <p>axios</p>
        <p>router</p>
        <p>vercel</p>
        <div className='flex'>
          <p>{projectCard_2_navigation}</p>
          <div>{projectCard_2_appNavi}</div>
        </div>
        <img src={projectCard_2_img} alt='' />
      </div>
    </>
  );
}

export default Projects;
