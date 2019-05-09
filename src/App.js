import React, { Component } from 'react';
import {BrowserRouter , Route}  from 'react-router-dom';
import Navbar from './components/navbar'
import Calculation from './components/calculation';
import Contact from './components/contact';
import Record from './components/record';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path='/' component={Record} />
          <Route path='/contact' component={Contact}/>
          <Route path='/calculation' component={Calculation}/> 

        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
