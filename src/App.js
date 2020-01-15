import React from 'react';
import './App.css';
import {Header} from './components/header/Header'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import {HomePageContainer} from './components/HomePage/HomePage';
import {About} from './components/About/About';


function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="bg-dark text-light">
     <Header/>
     <div className = 'change'>
       <Route path='/' render = {()=>{return <Redirect to='home'/>}}/>
       <Route path='/home' render = {()=>{return <HomePageContainer />}}/>
       <Route path='/about' render = {()=>{return <About />}}/>
     </div>
    </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
