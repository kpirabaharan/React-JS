import { disconnect } from 'process';

function App() {
  return (
    <div className='flex flex-col justify-center h-full'>
      <div className='flex flex-row'>
        <div className='basis-1/2 pr-2'>
          <img
            className='max-h-[500px]'
            src='../public/Macbook-Air.png'
            alt={'Macbook-Air.png'}
          />
        </div>
        <div className='flex flex-col basis-1/2 pt-32'>
          <p className='text-xl font-playfair font-bold'>Macbook-Air</p>
          <p>$1999.99</p>
          <p className='text-sm pt-4'>Powerful Laptop</p>
        </div>
      </div>
    </div>
  );
}

export default App;
