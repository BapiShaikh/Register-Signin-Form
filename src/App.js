
import { useState } from 'react';
import './App.css';
import HomePage from './Component/Home/HomePage';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const {user,setLoginUser} = useState({})
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
        {
          user && user._id ? <HomePage setLoginUser={setLoginUser}/>: <Login/>
        }
        </Route>
        <Route exact path="/login"><Login setLoginUser={setLoginUser}/></Route>
        <Route exact path="/register"><Register/></Route>
      </Switch>

    </Router>
      
      
      
      
    </div>
  );
}

export default App;
