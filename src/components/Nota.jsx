import React from 'react';
import './Nota.css';

export default function Nota({ listaNota, setListaNota, fechaActual }) {
  

  const handleEliminarNota = (id) => {
    const nuevaListaNota = listaNota.filter((nota) => nota.id !== id);
    setListaNota(nuevaListaNota);
  };

  return (
    <section className="listadoNota">
      {listaNota.map((n) => {
        return (
          <div className="notaCompleta" key={n.id}>
            <p className="fecha">{fechaActual()}</p>
            <div className="textoNota">
              <h3 className="nombreNota">{n.nombre}</h3>
              <p className="descripcionNota">{n.descripcion}</p>
            </div>
            <button className="btnBorrar" onClick={()=>{handleEliminarNota(n.id)}}>Borrar</button>
          </div>
        );
      })}
    </section>
  );
}
