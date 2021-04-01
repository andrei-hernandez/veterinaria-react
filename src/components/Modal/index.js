import React from 'react';
import ModalHeader from './ModalHeader';
import Select from '../Select';
import Input from '../Input';
import ModalFooter from './ModalFooter'

export default function Modal({ manejarInput = () => { }, crearEntidad = () => { } }) {

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

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <ModalHeader />
          <div className="modal-body">
            <form id="form">
              <input type="hidden" id="indice" />
              <div className="form-row">
                <div className="col mb-4">
                  <Select
                    nombreCampo="tipo"
                    options={tiposMascota}
                    onChange={manejarInput}
                    placeholder="Tipo Animal" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <Input
                    nombreCampo="nombre"
                    tipo="text"
                    placeholder="Nombre"
                    onInput={manejarInput} />
                </div>
                <div className="col"
                ><Select
                    nombreCampo="owner"
                    options={owners}
                    onChange={manejarInput}
                    placeholder="Dueño" />
                </div>
              </div>
            </form>
          </div>
          <ModalFooter crearEntidad={crearEntidad} />
        </div>
      </div>
    </div>
  )
}