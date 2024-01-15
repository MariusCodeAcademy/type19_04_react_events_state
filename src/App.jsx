import CounterList from './components/counters/CountersList';
import TextInput from './components/inputs/TextInput';
import './styles/App.css';

export default function App() {
  console.log('<App />');
  return (
    <div className='App container'>
      <h1>Hello, world!</h1>
      <hr />

      {false && <CounterList />}
      <TextInput />
    </div>
  );
}
