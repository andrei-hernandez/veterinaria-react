import React, { Component } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Tabla/Table'
import Modal from './components/Modal';
import { listarEntidad, crearEditarEntidad } from './service';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: 'POST',
    }
  }

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    this.setState({ entidades })
  };

  manejarInput = (e) => {
    const
      {
        target: { value, name },
      } = e
    let { objeto } = this.state;
    objeto = { ...objeto, [name]: value, }
    this.setState({ objeto })
  }

  crearEntidad = async () => {
    const { entidad } = this.props;
    let { objeto } = this.state;
    await crearEditarEntidad({ entidad, objeto, method: 'POST' });
    this.listar();
  };

  editarEntidad = async (_e, index) => {
    const objeto = { ...this.state.entidades[index] };
    this.setState({ objeto, idObjeto: index, method: 'PUT' }, () => {
    });
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
        <Table
          entidades={this.state.entidades}
          editarEntidad={this.editarEntidad} />
        <Modal
          manejarInput={this.manejarInput}
          crearEntidad={this.crearEntidad}
          objeto={this.state.objeto} />
      </div>
    );
  }
}

export default Pagina;
