import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GlobalProvider } from './utils/GlobalState';
import Frame from './components/Frame'

const App = (props) => {

    
return (
    <GlobalProvider >
    <div>
        <Router>
        <Switch>
            <Route path="/" render={() => {return <Frame />}} />
        </Switch>
        </Router>
    </div>
    </GlobalProvider>  
);
}

export default App;