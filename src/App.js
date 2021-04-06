import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pagina from './Pagina';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <Pagina {...props} titulo="Mascotas" entidad="mascotas" />
            )}
          />
          <Route
            path="/veterinaries"
            component={(props) => (
              <Pagina {...props} titulo="Veterinaries" entidad="veterinaries" />
            )}
          />
          <Route
            path="/owners"
            component={(props) => (
              <Pagina {...props} titulo="Dueñes" entidad="owners" />
            )}
          />
          <Route
            path="/consultas"
            component={(props) => (
              <Pagina {...props} titulo="Consultas" entidad="consultas" />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
