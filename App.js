import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header.js';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='component-container'>
        <div className='top-row'>
          <Section1 className='section-1' />
          <Section2 className='section-2' />
        </div>
        <div className='bottom-row'>
          <Section3 className='section-3' />
        </div>
      </div>
    </div>
  );
}

export default App;
