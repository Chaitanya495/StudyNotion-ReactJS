import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import ErrorPage from './pages/ErrorPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  return (
    <div className='w-screen h-[850px] bg-pageBG flex flex-col font-overallFont'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard /> 
          </PrivateRoute>
        } />
        <Route path='*' element={<ErrorPage/>} />
       
      </Routes>
    </div>
  );
}

export default App;
