
import './App.css';
import Homepage from './components/homepage';
import Loginform from './components/loginform';
import Registrationform from './components/registrationform';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
  <>
      <Routes> 
          <Route path='/' element={<Homepage/>} />
          <Route exact path='/login' element={<Loginform/>} />
          <Route exact path='/register' element={<Registrationform/>} />
      </Routes>
    </>
      
      
  
  );
}

export default App;
