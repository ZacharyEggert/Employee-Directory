import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

const App = (props) => {
return (
    <div>
    <Router>
    <Switch>
        <Route path='/' render={() => {return <Component />}} />
    </Switch>
    </Router>
    </div>  
);
}

export default App;