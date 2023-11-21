import React, { useState } from 'react';

export default function PaginaLupa() {
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleInput = () => {
    setMostrarInput(!mostrarInput);
  };

  return (
    <div style={{ margin: '3px' }}>
      {mostrarInput ? (
        <div>
          <button
            onClick={handleInput}
            style={{
              margin: '3px',
              backgroundColor: 'transparent',
              border: '1px solid black',
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/256/7175/7175236.png"
              alt="Cerrar"
              style={{ width: '16px' }}
            />
          </button>
          <input type="text" placeholder="Ingrese su búsqueda..." />
        </div>
      ) : (
        <button
          onClick={handleInput}
          style={{
            margin: '3px',
            backgroundColor: 'transparent',
            border: '1px solid black',
          }}
        >
          <img
            src="https://i.pinimg.com/originals/32/a4/d4/32a4d4169ebc73509036d99308fd38c7.png"
            alt="Buscar"
            style={{ width: '16px' }}
          />
        </button>
      )}
    </div>
  );
}
