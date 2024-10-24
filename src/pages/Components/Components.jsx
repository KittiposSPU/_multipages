import './Component.css';
import NumCount from './NumCount';
import Timer from './Timer';
import Sum from './Sum';
import Temperatures from './Temp';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>REACT COMPONENTS</h1>
      <div className='wrapper'>
        <span>
          <NumCount />
          <Timer />
        </span>
        <Sum />
      </div>
      <div>
        <Temperatures />
        
      </div>
      <h2 className='name'>นาย กิตติพศ เมฆสัมพันธ์ รหัส 66003654</h2>
    </div>

  );
}

export default App;

