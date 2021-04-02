import React, { useState } from 'react';
import Header from './Headder';
import Fila from './Fila'

export default function Table({ entidades = [], editarEntidad = () => { } }) {

  const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : [];

  return (
    <table className="table table-stripped table-hover">
      <Header columnas={columnas} />
      {
        entidades.map((entidad, index) =>
          <Fila
            entidad={entidad}
            index={index}
            editarEntidad={editarEntidad} />)
      }
    </table>
  )
}
