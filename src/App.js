// import logo from './logo.svg';
import './Appa.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'; 
import React,{useState} from 'react';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');// whether dark mode is enabled or not
  const[alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null);
    },2000);

  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title="Textutils - Dark Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() =>{
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title="Textutils - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about"
            element={<About />}/> */}
          
          
          {/* <Route exact path="/"
           element={ */}
           <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
           {/* }/>  */}
        {/* </Routes> */}
        </div>
        {/* </Router> */}
      
      
    </>
  );
}

export default App;
