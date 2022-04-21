import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
      document.title = 'light mode enabled';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#2b343c';
      showAlert('Dark mode is enabled', 'success');
      document.title = 'dark mode enabled';

      // setInterval(() => {
      //   document.title='hi this is awesome';
      // }, 2000);

      // setInterval(() => {
      //   document.title='good morning';
      // }, 531);
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Switch> */}
        {/* <Route exact path="/about"> */}
            {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
            <TextForm heading='Enpmnter the text to analyze below ' showAlert={showAlert} mode={mode}/>
        {/* </Route> */}
      {/* </Switch> */}
      {/* <About /> */}
    {/* </Router> */}
    </>
  );
}

export default App;
