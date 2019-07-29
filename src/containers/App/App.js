import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.scss';

// pages
import LoginForm from '../../pages/LoginForm/loginForm';
import PurchaseForm from '../../pages/PurchaseForm/purchaseForm';

// components
import Header from '../../components/Header/header';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main className="App_content">
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/purchase" component={PurchaseForm} />
            <Route path="*" render={props => <div>404</div>}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
