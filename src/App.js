import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App flex flex-col ">
        <div className='bg-background h-screen pl-10 pr-10 xl:pl-20 xl:pr-20'>
            <div className='w-full '><Navbar/></div>
            <div className='w-full mt-12 md:mt-24 lg:mt-40'><Home/></div>
        </div>
      </div>
  );
}

export default App;
