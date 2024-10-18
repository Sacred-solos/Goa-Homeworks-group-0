import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
          <h1>Welcome to student management system</h1>
          </Route>
          <Route path="/dashboard" component={AdminDashboard}/>
          <Route path="/students" component={AdminDashboard}/>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
