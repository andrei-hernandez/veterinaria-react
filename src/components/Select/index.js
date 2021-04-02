import React from 'react'

export default function Select(
  {
    options = [],
    nombreCampo = "vacio",
    placeholder,
    onChange = () => { },
    value = "",
  }
) {

  return (
    <select id="tipo" className="form-control" onChange={onChange} name={nombreCampo} value={value}>
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
