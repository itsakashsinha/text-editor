import './App.css';
import TextArea from './components/TextArea';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnColor, setbtnColor] = useState('primary');

  function darkMode(){
    if(mode === "light" && btnColor === "primary"){
      setMode("dark");
      setbtnColor("dark");
      document.body.style.backgroundColor = '#1f476b';
    }
    if(mode === "dark" && btnColor === "dark"){
      setMode("light");
      setbtnColor("primary");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
      <TextArea heading="Write something" mode={mode} darkMode={darkMode}/>
    </div>
  );
}

export default App;
