import React from 'react';
import logo from './assets/svg/logo.svg';
import { Button_default as Button } from './components/Button/Button';
import { Form } from './components/Form/Form';

import { BrowserRouter as Router, Link} from 'react-router-dom'
import {router as Route} from './pages/router'

function App() {

  return (
    <Router> 
      <div className="App grid-top">
      <div className="flex-center-row py-16 ">
        <Link to='/'> <Button variant='default'> Home </Button></Link>
        <Link to='/task-manager'> <Button variant='default'> Task Manager </Button></Link>
        <Link to='/buttons'> <Button variant='default'> Buttons </Button></Link>
        <Link to='/about'> <Button variant='default'> About </Button></Link>
      </div>
      <Route/>
      </div>
    </Router>
  );
}

export default App;


const Head = () => {

}
