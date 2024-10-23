import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
    return (
        <div>
            
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
           
        </div>
    );
};

export default App;
