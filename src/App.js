import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Textutil from "./component/Textutil";


function App() {
  const [mode, setMode] = useState('light')

  const toogleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      document.title = 'TextUtils - Dark'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light'
    }
  }

  return (
    <>
      <Navbar mode={mode} toogleMode={toogleMode}/>
      <div className="container">
        <Textutil heading="Enter The Text :"  mode={mode}/>
      </div>
    </>
  );
}


export default App;
