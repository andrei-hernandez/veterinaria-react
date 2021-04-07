import React, { Component } from 'react';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Tabla/Table'
import Modal from './components/Modal';
import Input from './components/Input';
import Select from './components/Select'
import { listarEntidad, crearEditarEntidad, eliminarEntidad } from './service';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const tiposMascota =
  [
    { valor: "Perro", etiqueta: "Perro" },
    { valor: "Gato", etiqueta: "Gato" },
    { valor: "Pájaro", etiqueta: "Pájaro" },
    { valor: "Otro", etiqueta: "Otro" },
  ];

const owners =
  [
    { valor: "América", etiqueta: "América" },
    { valor: "Andi", etiqueta: "Andi" },
    { valor: "Jhon", etiqueta: "Jhon" },
    { valor: "Felix", etiqueta: "Felix" },
  ];

const ComponentCampo = (
  {
    manejarInput = () => { },
    objeto = {},
    nombreCampo = ""
  }
) => {
  // eslint-disable-next-line default-case
  switch (nombreCampo) {
    case 'tipo':
    case 'mascota':
    case 'vererinarie':
    case 'diagnostico':
      return (
        <Select
          nombreCampo={nombreCampo}
          options={tiposMascota}
          onChange={manejarInput}
          placeholder={nombreCampo}
          value={objeto[nombreCampo]}
        />
      );
    case 'nombre':
    case 'apellido':
    case 'id':
    case 'owner':
    case 'historia':
      return (
        <Input
          nombreCampo={nombreCampo}
          tipo="text"
          onInput={manejarInput}
          placeholder={nombreCampo}
          value={objeto[nombreCampo]}
        />
      );
  }
};

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: 'POST',
      columnas: [],
    }
  }

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    let columnas = [];
    if (Array.isArray(entidades) && entidades.length > 0) {
      columnas = Object.keys(entidades[0]) || [];
    }
    this.setState({ entidades, columnas })
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
    let { objeto, method, idObjeto } = this.state;
    if (method === 'PUT') {
      await crearEditarEntidad({ entidad, objeto, method, idObjeto });
      this.setState({ method: 'POST' });
    } else if (method === 'POST') {
      await crearEditarEntidad({ entidad, objeto, method });
    }
    this.listar();
  };

  editarEntidad = async (_e, index) => {
    const objeto = { ...this.state.entidades[index] };
    this.setState({ objeto, idObjeto: index, method: 'PUT' }, () => {
    });
  };

  eliminarEntidad = async (_e, index) => {
    const { entidad } = this.props;
    const res = await eliminarEntidad({ entidad, idObjeto: index });
    console.log(res);
    this.listar();
  }

  componentDidMount() {
    this.listar();
  }

  render() {
    const { titulo = "Pagina sin titulo" } = this.props;
    const { columnas = [] } = this.state;
    return (
      <div className="container">
        <ActionsMenu titulo={titulo} />
        <Table
          entidades={this.state.entidades}
          editarEntidad={this.editarEntidad}
          eliminarEntidad={this.eliminarEntidad}
          columnas={columnas} />
        <Modal
          manejarInput={this.manejarInput}
          crearEntidad={this.crearEntidad}
          objeto={this.state.objeto} >
          {columnas.map((columna, index) =>
          (
            <ComponentCampo
              key={index}
              manejarInput={this.manejarInput}
              nombreCampo={columna}
              objeto={this.state.objeto}
            />
          )
          )}
        </Modal>
      </div>
    );
  }
}

export default Pagina;
