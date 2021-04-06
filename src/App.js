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
          <Route exact path="/">
            <Pagina titulo="Mascotas" entidad="mascotas" />
          </Route >
          <Route path="/veterinaries">
            <Pagina titulo="Veterinaries" entidad="veterinaries" />
          </Route >
          <Route path="/owners">
            <Pagina titulo="Dueñes" entidad="owners" />
          </Route >
          <Route path="/consultas">
            <Pagina titulo="Consultas" entidad="consultas" />
          </Route >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
