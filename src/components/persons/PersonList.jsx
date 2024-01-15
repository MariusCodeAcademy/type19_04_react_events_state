import { useState } from 'react';
import { personData } from './data';

export default function PersonList() {
  // console.log('personData ===', personData);
  const [mainArr, setMainArr] = useState(personData);

  console.log('mainArr ===', mainArr);

  const howMany = mainArr.length;

  const malesCount = mainArr.filter((pObj) => pObj.gender === 'male').length;
  console.log('malesCount ===', malesCount);
  return (
    <div>
      <h2>Persons ({howMany})</h2>
      <fieldset>
        <legend>Info</legend>
        <p>Total persons: {howMany}</p>
        <p>Total males: {malesCount}</p>
        <p>Total females: </p>
        <p>Persons above 37 years: </p>
        <p>Person with longesnt name: </p>
        <p>Average persons age: </p>
        <p>Total persons age: </p>
        <p>(all hobies atskirti kableliais ir tarpeliais)</p>
      </fieldset>
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
