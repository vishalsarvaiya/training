import logo from './logo.svg';
import './App.css';
import Registrationform from './components/registrationform';
import Loginform from './components/loginform';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes> 
          <Route path='/' element={<Loginform/>} />
          {/* <Route exact path='/login' element={<Loginform/>} /> */}
          <Route exact path='/register' element={<Registrationform/>} />
      </Routes>
    </>
  );
}

export default App;
