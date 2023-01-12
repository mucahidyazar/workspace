import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Routers
import ExpenseDashboardPage from '../components/ExpenseDashboardpage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
   
    <BrowserRouter>  
        <div>
            <Header />  
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/creat" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter;