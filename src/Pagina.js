import React, { Component } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Tabla/Table'
import Modal from './components/Modal';
import { listarEntidad } from './service';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entidades: [],
    }
  }

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    this.setState({ entidades })
  };

  componentDidMount() {
    this.listar();
  }

  render() {
    const { titulo = "Pagina si titulo" } = this.props;
    return (
      <div className="container">
        <Nav />
        <ActionsMenu titulo={titulo} />
        <Table />
        <Modal />
      </div >
    );
  }
}

export default Pagina;
