import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/complex/Main.jsx';
import Characters from './components/complex/Characters.jsx';
import Character from './components/simple/Character.jsx';
import Header from './components/simple/Header.jsx';
function App() {
  return ( 
      <Router>
        <Header/>
        {/* <NavBar scrollToProducts={this.scrollToProducts}/> */}
        <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/characters" exact component={Characters}/>
        <Route path="/film/:id/people" component={Characters}/>
        <Route path="/characters/:id" component={Character}/>
        {/* <Route path="/Nosotros"  exact component={aboutUs}/>
        <Route path="/Garantia" exact component={Garantia}/>
        <Route path="/Contacto" exact component={ContactUs}/>
        <Route path="/macs/:id" component={DetailProduct}/>
        <Route path="/404"component={NotFound}/>
        <Route component={NotFound}/> */}
        </Switch>
      </Router>
  );
}

export default App;
