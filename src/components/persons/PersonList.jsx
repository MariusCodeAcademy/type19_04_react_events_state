import { useState } from 'react';
import { personData } from './data';

export default function PersonList() {
  // console.log('personData ===', personData);
  const [mainArr, setMainArr] = useState(personData);

  // setTimeout(() => {
  //   setMainArr(personData); // infinite loop
  // }, 3000);
  console.log('mainArr ===', mainArr);
  return (
    <div>
      <h2>Persons</h2>
      <ul className='grid'>
        {mainArr.map((pObj) => (
          <li key={pObj.id} className='counter'>
            <h3>{pObj.name}</h3>
            <p>Age:{pObj.age}</p>
            <p>Gender: {pObj.gender}</p>
            <p>Hobby: {pObj.hobby}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
