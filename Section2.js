import '../Styles/Section2.css';

function Section2() {
  return (
    <div className='section2-main-container'>
      <div className='section2-header'>New</div>
      <div className='article-main-contain'>
        <div className='secondary-container'>
          <div className='article-header'>Hydrogen VS Electric Cars</div>
          <div className='article-tagline'>Will hydrogen-fueled cars ever catch up to EVs?</div>
        </div>
        <hr></hr>
        <div className='secondary-container' id='middle-article'>
          <div className='article-header'>The Downsides of AI Artistry</div>
          <div className='article-tagline'>What are the possible adverse effects of on-demand AI image generation?</div>
        </div>
        <hr></hr>
        <div className='secondary-container'>
          <div className='article-header'>Is VC Funding Drying Up?</div>
          <div className='article-tagline'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
