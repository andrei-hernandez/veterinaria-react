import React from 'react'

export default function Select({ options = [], nombreCampo = "vacio", onChange = () => { } }) {

  return (
    <select id="tipo" className="form-control" onChange={onChange}>
      <option value="">Seleccione {nombreCampo}</option>
      {options.map(({ valor, etiqueta }, index) => (
        <option key=
          {
            `${nombreCampo}-
          ${index}-
          ${valor}-
          ${etiqueta}`
          }
          value={valor}>{etiqueta}
        </option>
      ))
      }
      {console.log(options)}
    </select>
  )
}
