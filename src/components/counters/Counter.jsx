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

  const greenStyle = { color: 'green', fontWeight: 'bold' };

  function down() {
    // pasitikrinti
    // jei counterValue === 0 tai nemazinam
    // if (counterValue - 1 < 0) return;
    setCounterValue(counterValue - 1);
  }

  function upBy(howMuch) {
    setCounterValue(counterValue + howMuch);
  }

  const valueLargerThan5 = counterValue > 5;
  console.log('valueLargerThan5 ===', valueLargerThan5);

  const counterColorStyles = valueLargerThan5 ? greenStyle : {};

  return (
    <div className='counter'>
      {/* <p className='value'>{value}</p> */}
      <p style={counterColorStyles} className='value'>
        {counterValue}
      </p>
      <div className='control'>
        <button onClick={up}>Up</button>
        <button disabled={counterValue === 0} onClick={down}>
          Down
        </button>
        <button onClick={() => upBy(15)}>up by 10</button>
      </div>
    </div>
  );
}
