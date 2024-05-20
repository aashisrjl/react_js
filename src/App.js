import './App.css';
import React, {useState} from 'react';
import Footer from './components/Footer';
import Msgbox from './components/Msgbox';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';

export default function App(){
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('blue');

  const showAlert =  (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000);
    }
    const removeBodyclasses= ()=>{
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-success');

    }

  const toggleMode = (cls)=>{
    removeBodyclasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode is enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
     }

  }
  return (
   
   <>
  <div className="dark">
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-5">
      <About/>
      <Textform heading="Enter your text to analyze:" mode={mode} showalert={showAlert}/>
      <Msgbox/>
    </div>
    <Footer section1="Contact" section2="Status" section3="Links" mode={mode}/>
    </div>
   </>
  );
}