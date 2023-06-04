import './App.css';

function App() {
  function add2(a: number, b: number) {
    return a + b;
  }
  const result = add2(2, 2);

  const hobbies = ['Sports', 'Cookies'];

  type Person = {
    name: string;
    age: number;
  };

  let people: Person[];

  people = [
    {
      name: 'Keeshigan',
      age: 24,
    },
    {
      name: 'Biranugan',
      age: 21,
    },
  ];

  console.log(people);
}

export default App;
