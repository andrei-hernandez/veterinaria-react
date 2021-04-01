import React from 'react'

export default function Select(
  {
    options = [],
    nombreCampo = "vacio",
    placeholder,
    onChange = () => { }
  }
) {

  return (
    <select id="tipo" className="form-control" onChange={onChange} name={nombreCampo}>
      <option value="">Seleccione {placeholder}</option>
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
    </select>
  )
}
