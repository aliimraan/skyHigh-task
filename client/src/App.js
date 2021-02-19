
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './components/Account';
import ViewAccount from './components/ViewAccount';
import ViewUsers from './components/ViewUsers';
import Header from './components/Header';
import {Switch,Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import EditPage from './components/EditPage';

function App() {
  
  return (
    <div>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login"  component={Login}/>
      <Route path="/allUsers"  component={ViewUsers}/>
      <Route path="/register"  component={Register}/>
      <Route path="/account"  component={ViewAccount}/>
      <Route path="/edit"  component={EditPage}/>
    </Switch>
    </div>
  );
}

export default App

