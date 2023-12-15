import '../Styles/Section3.css';
import growth from '../assets/images/image-gaming-growth.jpg';
import retro from '../assets/images/image-retro-pcs.jpg';
import laptops from '../assets/images/image-top-laptops.jpg';

function Section3() {
  return (
    <div className='section3-main-container'>
      <div className='tech-article'>
        <img src={retro} alt='retro' className='images'></img>
        <div className='tech-article-container'>
          <div className='counter'>01</div>
          <div className='tech-title'>Reviving Retro PCs</div>
          <div className='tech-tag'>What happens when old PCs are given modern upgrades?</div>
        </div>
      </div>
      <div className='tech-article'>
        <img src={laptops} alt='laptops' className='images'></img>
        <div className='tech-article-container'>
          <div className='counter'>02</div>
          <div className='tech-title'>Top 10 Laptops of 2022</div>
          <div className='tech-tag'>Our best picks for various needs and budgets.</div>
        </div>
      </div>
      <div className='tech-article'>
        <img src={growth} alt='growth' className='images'></img>
        <div className='tech-article-container'>
          <div className='counter'>03</div>
          <div className='tech-title'>The Growth of Gaming</div>
          <div className='tech-tag'>How the pandemic has sparked fresh opportunities.</div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
