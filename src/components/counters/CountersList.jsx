import Counter from './Counter';

export default function CounterList() {
  return (
    <div className='row'>
      <div className='column'>
        <Counter title='Push ups' init={50} />
      </div>
      <div className='column'>
        <Counter title='Pull ups' />
      </div>
      <div className='column'>
        <Counter />
      </div>
    </div>
  );
}
// generuoti 3 counterius
// <Counter />
// <Counter title='push ups' init={50} />
