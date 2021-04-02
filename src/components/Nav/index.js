import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">Veterinaria</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Mascotas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/veterinaries">Veterinaries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/consultas">Consultas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">Dueñes</Link>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
