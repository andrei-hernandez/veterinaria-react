import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Tabla/Table'
import Modal from './components/Modal';
class Pagina extends Component {

  render() {
    const { titulo = "Pagina si titulo" } = this.props;
    return (
      <div className="container">
        <Nav />
        <ActionsMenu titulo={titulo} />
        <Table />
        </>
      </div >
    );
  }
}

export default Pagina;
