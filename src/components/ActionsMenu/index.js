import React, { useState } from 'react';
import './ActionsMenu.css';
import Alert from '../Alert/index';

export default function ActionsMenu({ , titulo }) {
  const [mostarAlerta, setMostarAlerta] = useState(false);

  return (
    <div className="actions-menu">
      <h1>{titulo}</h1>
      <div className="actions-menu-content">
        <div className="row d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >Nueva</button>
          {mostarAlerta && <Alert />}
        </div>
      </div>
    </div>
  )
}
