import React from 'react';

export default function index(
  {
    tipo = "text",
    nombreCampo,
    placeholder,
    onInput = () => { },
    value = "",
  }
) {
  return (
    <input
      type={tipo}
      name={nombreCampo}
      className="form-control mb-4"
      placeholder={placeholder}
      value={value}
      onInput={onInput}
    />
  )
}
