import { useState } from 'react';

export default function Counter() {
  console.log('<Counter /> sukurtas');
  // let value = 0;
  const [counterValue, setCounterValue] = useState(0);
  // counterValue += 1; // niekada nekeiciam counterValue tiesiogiai su prilyginimu
  // console.log('counterValue ===', counterValue);
  // console.log('value ===', value);

  function up() {
    console.log('up fired');
    // value++;
    // console.log('value inside ===', value);
    // state setinimo funkcija visada perkrauna komponenta
    setCounterValue(counterValue + 1);
    // setCounterValue(counterValue++);
    console.log('counterValue inside ===', counterValue);
  }

  return (
    <div className='counter'>
      {/* <p className='value'>{value}</p> */}
      <p className='value'>{counterValue}</p>
      <div className='control'>
        <button onClick={up}>Up</button>
        <button>Down</button>
        <button>up by 10</button>
      </div>
    </div>
  );
}
