import React, { useState } from 'react'
//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert('');
    },2000)
  }

  const toggleMode = ()=>{
     if(mode=== 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       document.body.style.Color = 'white';
       showAlert('Dark mode is successfully enabled', 'success')
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = 'black';
      showAlert('Light mode is successfully enabled', 'success')
    }
  }


  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>

    <TextForm title="Enter your text Here" mode={mode} showAlert={showAlert}/>
    
    </>
  );
}


//export textfun;
export default App;
