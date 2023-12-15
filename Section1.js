import '../Styles/Section1.css';
import background from '../assets/images/image-web-3-desktop.jpg'

function Section1() {
  return (
    <div className='main-container'>
      <div className='image-container'>
        <img src={background} alt="abstract shapes" className='image'></img>
      </div>
      <div className='lower-contianer'>
        <div className="lower-item" id='title'>The Bright Future of Web 3.0?</div>
        <div className="lower-item" id='info-container'>
          <div id='info-text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</div>
          <div id='button'>READ MORE</div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
