import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Header} from "./header/Header";
import {FoodList} from './foodList/FoodList'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router basename="/home">
                <Header>
                <Route path="/" component={FoodList}/>
                </Header>
            </Router>
        )

    }
}

export default App;
