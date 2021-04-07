import React from 'react';
import ModalHeader from './ModalHeader';
import Select from '../Select';
import Input from '../Input';
import ModalFooter from './ModalFooter'

export default function Modal(
  {
    manejarInput = () => { },
    crearEntidad = () => { },
    objeto = {},
    children = [],
  }
) {



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
                <div className="col">
                  {children}
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