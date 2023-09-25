import { useState } from 'react';
import './App.css';

import blackbirdimg from './Company-Logo.png'

function App() {
  let [ismainpagetrue, setismainpagetrue] = useState(false)
  return (
    <div className="App">
      {ismainpagetrue === true ? <Mainpage /> : <Welcomepage setismainpagetrue={setismainpagetrue} />}
    </div>
  );
}

// welcome Page
function Welcomepage({setismainpagetrue}) {
  return (
    <div className='welcomepage d-flex flex-column justify-content-center align-items-center'>
      <h1 className='fs-1'>
        Welcome to the
      </h1>
      <img className='mt-1 mb-4' src={blackbirdimg} alt="" />
      <button className='btn fs-3 py-1 px-5' onClick={() => setismainpagetrue(true)}>Start</button>
    </div>
  )
}

// main Page
function Mainpage() {
  return (
    <div className='mainpage'>
      It is mainpage
    </div>
  )
}


export default App;
