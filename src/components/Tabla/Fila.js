import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Fila({ entidad, index, editarEntidad = () => { }, eliminarEntidad = () => { } }) {
  return (
    <tbody id="lista-mascotas">
      <tr>
        <th scope="row">{index}</th>
        <td>{entidad.tipo}</td>
        <td>{entidad.nombre}</td>
        <td>{entidad.owner}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-info"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={(e) => editarEntidad(e, index)}
            ><FontAwesomeIcon icon={faEdit} /></button>
            <button
              type="button"
              className="btn btn-danger eliminar"
              onClick={(e) => eliminarEntidad(e, index)}
            ><FontAwesomeIcon icon={faTrashAlt} /></button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}
