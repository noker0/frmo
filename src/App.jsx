import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Reg from './Components/Reg/Reg';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reg' element={<Reg />} />
      </Routes>
    </div>
  );
}

export default App;
