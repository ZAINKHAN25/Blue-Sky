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
function Welcomepage({ setismainpagetrue }) {
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
    <div className='mainpage container d-flex flex-column align-items-center justify-content-center'>
      <div className='bodychangediv my-3'>
        <button className='btn fs-4 py-1'> Click me to change body color </button>
      </div>
      <div className='headerdiv d-flex justify-content-between align-items-center mb-3 fs-5 px-2'>
        <div className='d-flex align-items-center'>
          <div>
            Blue Sky
          </div>
          <img className='headerimg ms-3' src={blackbirdimg} alt="" />
        </div>
        <div>
          Made by Zain Khan
        </div>
      </div>
      <div className='mainheadingdiv mt-4'>
        <h1 className='heading'>Main Heading</h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='cardareadiv mt-4 mb-5'>
        <h1 className='heading'>Change Card Color or Background</h1>
        <div className='maincarddiv d-flex justify-content-around'>
          {Array.from([0, 1, 2], (x) => {
            return (<div key={x} className='singlecard mx-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </div>)
          })}
        </div>
      </div>
      <div className='text-center mb-5'>
        <h1 className='heading'>Change Button Color or Background</h1>
        <button className='btnofchangeme btn fs-4 py-1'>Change Me</button>
      </div>
      <div className='resultdiv text-center d-flex align-items-stretch flex-column mt-5 p-5'>
        <div className='fs-1 fw-bold mb-3'>
          Your Color's
        </div>
        <div>
          <table>
            <tbody>
              
            {/* table heading */}
            <tr>
              <th className='firstrow fs-4 mb-2'>Element Name</th>
              <th className='secondrow fs-4 mb-2'>Element Background</th>
              <th className='thirdrow fs-4 mb-2'>Element Color</th>
            </tr>
            {/* body div */}
            <tr>
              <td className='firstrow'>Body:</td>
              <td className='secondrow'>#1C3259</td>
              <td className='thirdrow'>multiple</td>
            </tr>
            {/* Main Heading 1 */}
            <tr>
              <td className='firstrow'>Main Heading:</td>
              <td className='secondrow'>#1C3259</td>
              <td className='thirdrow'>#295BA1</td>
            </tr>
            {/* Paragraph */}
            <tr>
              <td className='firstrow'>Paragraph: </td>
              <td className='secondrow'>#1C3259</td>
              <td className='thirdrow'>#fff</td>
            </tr>
            {/* Card:  */}
            <tr>
              <td className='firstrow'>Card: </td>
              <td className='secondrow'>#3583E9</td>
              <td className='thirdrow'>#fff</td>
            </tr>
            {/* Button:  */}
            <tr>
              <td className='firstrow'>Button: </td>
              <td className='secondrow'>#3583E9</td>
              <td className='thirdrow'>#fff</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default App;
