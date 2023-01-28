import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.css';
import CheckMail from './pages/auth/checkmail/CheckMail';
import ConfirmMail from './pages/auth/confirmedMail/ConfirmMail';
import ForgetPassword from './pages/auth/ForgetPassword/ForgetPassword';


import Login from './pages/auth/login/Login';
import NewPassword from './pages/auth/newPassword/NewPassword';
import SignUp from './pages/auth/signup/SignUp';
import Connect from './pages/connect/Connect';
import Dashboard from './pages/Dashboard';
import Settings from './pages/settings/Settings';

const App = () => {
  return(
    <div>
       <Router>
        <Switch>
           <Route path="/login" exact>
              <Login />
          </Route>

          <Route path="/signup" exact>
              <SignUp />
          </Route>

          <Route path="/forget-password" exact>
              <ForgetPassword />
          </Route>

          <Route path="/new-password" exact>
              <NewPassword />
          </Route>

          <Route path="/check-mail" exact>
              <CheckMail />
          </Route>

          <Route path="/confirm-mail" exact>
              <ConfirmMail />
          </Route>

          <Route path="/dashboard" exact>
              <Dashboard />
          </Route>

          <Route path="/connect" exact>
              <Connect />
          </Route>

          <Route path="/settings" exact>
              <Settings />
          </Route>
        </Switch>   
       </Router>
    </div>
  )
}

export default App;
