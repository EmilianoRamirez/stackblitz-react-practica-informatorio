import React, { useState } from 'react';
import BuscadorPelicula from '../components/BuscadorPelicula';

export function PaginaBuscador() {
  const [search, setSearch] = useState('');

  return (
    <main className="container">
      <div className="containerBuscador">
        <input
          type="text"
          onChange={(a) => {
            return setSearch(a.target.value);
          }}
        ></input>
        <button>Buscar</button>
      </div>
      <h3>Pelicula buscada: {search}</h3>
    </main>
  );
}
