import React, { useMemo, useState } from 'react';

import './App.css'

const lookup = {
  def: [{ id: '0', text: 'Selecione o modelo' }],
  ford: [
    { id: '1', text: 'Ecosport' },
    { id: '2', text: 'Fiesta' },
    { id: '3', text: 'Ranger' },
    { id: '4', text: 'Mondeo' },
    { id: '5', text: 'Ka' },
  ],
  fiat: [
    { id: 'a', text: 'Palio' },
    { id: 'b', text: 'Pulse' },
    { id: 'c', text: 'Siena' },
    { id: 'd', text: 'S10' },
    { id: 'e', text: 'Toro' },
  ],
};


function App() {
  const [dataValue, setDataValue] = useState('def');
  const options = useMemo(() => lookup[dataValue], [dataValue]);

  const onChange = ({ target: { value } }) => {
    setDataValue(value);
  };

  return (
    <div>
      <select onChange={onChange}>
        <option value='def'>Selecione a marca</option>
        <option value='ford'>Ford</option>
        <option value='fiat'>Fiat</option>
      </select>
      <hr />

      <select disabled={dataValue === 'def'}>
        {[...lookup.def, ...options].map(({ id, text }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default App
