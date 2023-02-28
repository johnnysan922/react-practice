import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Routes>
        
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
          </>
        }/>

        <Route path='/login' element={
          <>
            <Login />
          </>
        }/>

      </Routes>
    </div>
  );
}

export default App;
