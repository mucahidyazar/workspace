import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Archive from './Archive';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/archive" component={Archive} />
        </Switch>
    );
}

export default AppRouter;
