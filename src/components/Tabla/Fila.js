import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Fila({ mascota, index }) {
  return (
    <tbody id="lista-mascotas">
      <tr>
        <th scope="row">{index}</th>
        <td>{mascota.tipo}</td>
        <td>{mascota.nombre}</td>
        <td>{mascota.owner}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info editar"><FontAwesomeIcon icon={faEdit} /></button>
            <button type="button" className="btn btn-danger eliminar"><FontAwesomeIcon icon={faTrashAlt} /></button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}
