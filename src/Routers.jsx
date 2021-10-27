import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {
  Home,
  ResultCreditPay,
  NoticeCreditPay,
} from './pages';

const Routers = (props) => {
  console.log('[RENDER Router]', props);
  return (
    <Router>
        {/* <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/ResultCreditPay">결제 결과</Link>
        </div>
        <hr /> */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/ResultCreditPay'>
            <ResultCreditPay />
          </Route>
          <Route path='/NoticeCreditPay'>
            <NoticeCreditPay />
          </Route>
        </Switch>
    </Router>
  );
};

export default Routers;
