import {useRef, useState} from 'react';
import './App.css'
//import Stated from './components/statedemo';
//import propdemo from './components/propdemo'
//import Con_rend from './components/conditional_rendering';
//import Listkey from './components/list_keys';
//import Form from './components/formdemo';
//import UseeffectDemo from './components/useeffectDemo';
// import Comp1 from './components/Comp1';
import Emp_add from '../employee/emp_add';
import Header from '../employee/header';
import Footer from '../employee/footer';
// const FirstName = createContext();
// const LastName = createContext();

function App() {

  // const refelement = useRef("");
  // const[name,setname] = useState("vishal");

  
  // const reset = () =>
  // {
  //   setname("");
  //   refelement.current.focus();
  //   refelement.current.style.color="black";
  // }

  // function colorchange()
  // {
  //   refelement.current.focus();
  //   refelement.current.style.color="blue";
  // }


  return (
    <>
      {/* <Header/> */}
      <Emp_add/>
      {/* <Footer/> */}
    
    {/* <h1>hello</h1>
        <input type='text' ref={refelement} value = {name} onChange={(e) => setname(e.target.value)  }></input>
         <button onClick={reset}>reset</button>
         <button onClick={colorchange}>Change Color</button> */}

{/*     
        //   //<propdemo sname='vishal' lname='sarvaiya' />
        //   //<Stated />
        // // <Con_rend/>
        // //<Listkey/>
        //   //<Form/>
        //   //<UseeffectDemo/> */}
         
        {/* //   <FirstName.Provider value={"vishal"}>
        //     <LastName.Provider value ={"sarvaiya"}>
           
        //       <Comp1/>
        //     </LastName.Provider>
          
        //   </FirstName.Provider> */}
        
         </>


  
  )
}

export default App;
//export {FirstName,LastName};
