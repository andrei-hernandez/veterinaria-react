import React from 'react';

export default function index(
  {
    tipo = "text",
    nombreCampo,
    placeholder,
    onInput = () => { }
  }
) {
  return (
    <input
      type={tipo}
      name={nombreCampo}
      className="form-control"
      placeholder={placeholder}
      onInput={onInput}
    />
  )
}
