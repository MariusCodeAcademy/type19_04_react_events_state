import { useState } from 'react';
import { personData } from './data';

function getMales(arr) {}

export default function PersonList() {
  // console.log('personData ===', personData);
  const [mainArr, setMainArr] = useState(personData);

  console.log('mainArr ===', mainArr);

  const howMany = mainArr.length;

  const malesCount = mainArr.filter((pObj) => pObj.gender === 'male').length;

  // const malesList = getMales(mainArr);

  const allHobbiesString = mainArr.reduce((total, pObj) => total + pObj.hobby + ', ', '');
  const allHobbiesString2 = mainArr.map((pObj) => pObj.hobby).join(', ') + '.';
  console.log('allHobbiesString2 ===', allHobbiesString2);

  return (
    <div>
      <h2>Persons ({howMany})</h2>
      <fieldset>
        <legend>Info</legend>
        <p>Total persons: {howMany}</p>
        <p>Total males: {malesCount}</p>
        <p>Total females: </p>
        <p>Persons above 37 years: (count) </p>
        <p>Persons above 37 years: (list) </p>
        <p>Person with longesnt name: </p>
        <p>Average persons age: </p>
        <p>Total persons age: </p>
        <p>(all hobies atskirti kableliais ir tarpeliais)</p>
        <p>{allHobbiesString}</p>
        <p>{allHobbiesString2}</p>
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
