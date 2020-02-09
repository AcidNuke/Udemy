import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Faq from './components/Faq/Faq.js'
import Home from './components/Home/Home.js'
import {Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header/>

            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/Faq" component={Faq}></Route>

            <Footer/>
        </div>
    );
}

export default App;
