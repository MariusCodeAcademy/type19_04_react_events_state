import CounterList from './components/counters/CountersList';
import TextInput from './components/inputs/TextInput';
import PersonList from './components/persons/PersonList';
import './styles/App.css';

export default function App() {
  console.log('<App />');
  return (
    <div className='App container'>
      <h1>Hello, world!</h1>
      <hr />
      <PersonList />
      {false && <CounterList />}
      {false && <TextInput />}
    </div>
  );
}
