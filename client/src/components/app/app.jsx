import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppHeader from "../app-header";
import Auth from '../auth';
import Details from "../details";
import Dashboard from "../dashboard";
import "./app.css";

const App = () => (
    <>
      <AppHeader/>
      <div className="body-container">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/details/:id" component={Details} />
          </Switch>
        </Router>
      </div>
    </>
);

export default App;
