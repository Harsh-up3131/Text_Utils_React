import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from "./components/About";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import { useState } from "react";
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

function App() {
  
    const [mode,setMode]= useState('light');
  
    const [alert, setAlert] = useState(null);
  
    const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
    }
    const toggleMode =()=>{
      if (mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#221164';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
      }
    }
  return (
    <>
    {/*<Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<Routes>
  <Route path="/about" element={<About />} />*/}
           {/* <Route path="/" element={ */}<Textform heading="Enter the text to analyse below." mode={mode} />{/*}} /> */}
     {/* </Routes>*/}
      </div>
    {/*  </Router> */}
    </>
  );
}

export default App;
