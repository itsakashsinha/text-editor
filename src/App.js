import './App.css';
import React, { useState } from 'react';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


function App(props) {
  const [mode, setMode] = useState('light');
  const [btnColor, setbtnColor] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, text) => {
    setAlert({
      msg: message,
      type: text
    });
    setTimeout(() => {
      setAlert();
    }, 1000);
  };

  function darkMode() {
    if (mode === "light" || document.body.style.backgroundColor === 'white') {
      setMode("dark");
      setbtnColor("dark");
      document.body.style.backgroundColor = '#1f476b';
      showAlert("Success", "Dark mode enabled!");
      document.title = "Text Editor-Dark-Mode";
    }
    else {
      setMode("light");
      setbtnColor("secondary");
      document.body.style.backgroundColor = 'white';
      showAlert("Success", "Light mode enabled!");
      document.title = "Text Editor-Light-Mode";
    }
  }
  return (
    
    <div className="App">
      <Navbar title='Text-Editor' secondMenu={"About"}></Navbar>
      <Alert alert={alert} />

      {/* <Router>
        <Routes>
          <Route exact path="/" element=<TextArea title="Text-Editor" mode={mode} darkMode={darkMode} btnColor={btnColor} /> />
          <Route exact path="/about" element=<About /> />
        </Routes>
      </Router> */}

      {/* <BrowserRouter>
      <Routes>

        <Route path='/' element={<TextArea title="Text-Editor" mode={mode} darkMode={darkMode} btnColor={btnColor} />}></Route>
        <Route path='/about' element=<About />></Route>

      </Routes>
      </BrowserRouter> */}
      
      <TextArea title="Text-Editor" mode={mode} darkMode={darkMode} btnColor={btnColor}/>
      <About/>
    </div>
  
  );
}

export default App;
