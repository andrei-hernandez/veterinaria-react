import React, { useState } from 'react';
import Header from './Headder';
import Fila from './Fila'

export default function Table() {

  const [mascotas, setMascotas] = useState([
    {
      tipo: 'Gato',
      nombre: 'Hennessey',
      owner: 'Andi'
    },
    {
      tipo: 'Perro',
      nombre: 'Chiquis',
      owner: 'America'
    }
  ]);

  const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : [];

  return (
    <table className="table table-stripped table-hover">
      <Header columnas={columnas} />
      {
        mascotas.map((mascota, index) =>
          <Fila mascota={mascota} index={index} />)
      }
    </table>
  )
}
