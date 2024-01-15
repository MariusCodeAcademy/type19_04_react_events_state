import Counter from './components/counters/Counter';
import './styles/App.css';

export default function App() {
  console.log('<App />');
  return (
    <div className='App container'>
      <h1>Hello, world!</h1>
      <hr />
      <Counter />
    </div>
  );
}
