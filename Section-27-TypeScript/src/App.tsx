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

  function inserAtBeginning<T>(arr: T[], val: T) {
    return [val, ...arr];
  }
  const demoArray = [1, 2, 3];
  const updatedArray = inserAtBeginning(demoArray, -1);

  console.log(updatedArray);
}

export default App;
