import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './style/App.css';

function App() {
  return (
    // <div className='App'>
    //   <Dashboard/>
    // </div>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <h1>
              hello mouaad
            </h1>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/dashboard'>
          <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
