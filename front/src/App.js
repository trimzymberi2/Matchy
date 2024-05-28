import './App.css';
import Garderobe from './components/Garderobe';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App flex flex-col w-full">
        <div className='bg-background h-screen pl-10 pr-10 xl:pl-20 xl:pr-20'>
            <div className='w-full '><Navbar/></div>
            <div className='w-full mt-12 md:mt-24 lg:mt-40'><Home/></div>
        </div>
          <div className=' pl-10 pr-10 xl:pl-20 xl:pr-20 mb-10 mt-12'><Garderobe/></div>
      </div>
  );
}

export default App;
