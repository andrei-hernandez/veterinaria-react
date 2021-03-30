import React from 'react';

export default function index({ tipo = "text", nombreCampo }) {
  return (
    <input
      type={tipo}
      id={nombreCampo}
      name={nombreCampo}
      className="form-control"
      placeholder={nombreCampo}
    />
  )
}
