import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="app">
      <Routes>
        
        <Route path='*' element={
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

        <Route path='/register' element={
          <>
            <Register />
          </>
        }/>

      </Routes>
    </div>
  );
}

export default App;
