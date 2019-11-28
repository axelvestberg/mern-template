import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Message from '../components/Message';
import history from '../history'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/message" exact component={Message} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
