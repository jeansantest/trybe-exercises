import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Client from './pages/Client';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cliente" component={Client} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default App;
