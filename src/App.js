import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.css';


import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

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
        </Switch>   
       </Router>
    </div>
  )
}

export default App;
