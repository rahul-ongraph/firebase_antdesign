import React from 'react'
 import Login from './container/Login/Login'
 import Signup from './container/Signup/Signup'
 import Dashboard from './container/Dashboard/Dashboard'
 import Api from './container/Api'
 import Forgot from './container/Forgot/forgot'
 import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
 import OTP from './container/Otp'
 import TextRecognization from './container/TextRecognization'
function App() {
  return (
 <div>
   {/* <OTP /> */}
   {/* <Login /> */}
   {/* <Signup /> */}
   {/* <Dashboard /> */}
   {/* <Api /> */}
   {/* <TextRecognization /> */}
   <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/otp">
            <OTP />
          </Route>
        </Switch>
      </div>
    </Router>
 </div>
  );
}
export default App;
