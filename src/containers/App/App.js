import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.scss';
import { TransitionGroup, CSSTransition } from "react-transition-group";
// pages
import LoginForm from '../../pages/LoginForm/loginForm';
import PurchaseForm from '../../pages/PurchaseForm/purchaseForm';

// components
import Header from '../../components/Header/header';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => (
          <div className="App">
            <Header />
            <main className="App_content">
              <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="App-transform-page"
                      timeout={300}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/purchase" component={PurchaseForm} />
                        <Route path="*" render={props => <Redirect to="/"/>}/>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
            </main>
          </div>
        )}
      />
    </Router>
  );
}

export default App;
