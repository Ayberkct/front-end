/* eslint-disable react/prop-types */
function Skils(props) {
  const { currentData } = props;
  const skilsTitle = currentData.skils.title;
  const skils1img = currentData.skils.js.skilImg;
  const skils1name = currentData.skils.js.skilName;
  const skils2img = currentData.skils.react.skilImg;
  const skils2name = currentData.skils.react.skilName;
  const skils3img = currentData.skils.redux.skilImg;
  const skils3name = currentData.skils.redux.skilName;
  const skils4img = currentData.skils.node.skilImg;
  const skils4name = currentData.skils.node.skilName;
  const skils5img = currentData.skils.vsCode.skilImg;
  const skils5name = currentData.skils.vsCode.skilName;
  const skils6img = currentData.skils.figma.skilImg;
  const skils6name = currentData.skils.figma.skilName;
  return (
    <div className='pb-0 mt-0 pt-0 mb-32  dark:text-white'>
      <h2 className='text-5xl flex justify-center pb-0 mt-0 pt-0 pb-8'>
        {skilsTitle}
      </h2>
      <div className='flex gap-4 justify-center'>
        <div>
          <img src={skils1img} alt='' />
          <p className='pt-4 flex justify-center'>{skils1name}</p>
        </div>
        <div>
          <img src={skils2img} alt='' />
          <p className='pt-4 flex justify-center'>{skils2name}</p>
        </div>
        <div>
          <img src={skils3img} alt='' />
          <p className='pt-4 flex justify-center'>{skils3name}</p>
        </div>
        <div>
          <img src={skils4img} alt='' />
          <p className='pt-4 flex justify-center'>{skils4name}</p>
        </div>
        <div>
          <img className='w-[120px] h-[120px] ' src={skils5img} alt='' />
          <p className='pt-4 flex justify-center'>{skils5name}</p>
        </div>
        <div>
          <img src={skils6img} alt='' />
          <p className='pt-4 flex justify-center'>{skils6name}</p>
        </div>
      </div>
    </div>
  );
}

export default Skils;
