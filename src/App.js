import React, { useState } from 'react'
//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');  

  };

  const toggleMode = (cls)=>{
    removeBodyClass();
    //document.body.addClass('bg-'+cls);
    document.body.classList.add('bg-'+cls);

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
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={ <TextForm title="Enter your text Here" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={ <About />} />
        
        </Routes>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>         
          <Route path="/">
            <TextForm title="Enter your text Here" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch> */}

    
    </Router>
    </>
  );
}


//export textfun;
export default App;
