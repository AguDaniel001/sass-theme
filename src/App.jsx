import './css/styles.css'
import React, {useState} from "react";
import Msg from './components/Msg'
import Form from './components/Form'
import ThemeSwitch from './components/ThemeSwitch'


function App() {
  return (
    <div className="App">
      <div className='page-wrapper'>
        <ThemeSwitch />
        <Msg />
        <Form />
      </div>
    </div>
  );
};

export default App;