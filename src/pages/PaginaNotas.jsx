import React, { useState } from 'react';
import Nota from '../components/Nota';
import './estilos/PaginaNotas.css';

export default function PaginaNotas() {
  const [nota, setNota] = useState({ nombreNota: '', descripcionNota: '' });
  const [listaNota, setListaNota] = useState([]);
  const [contador, setContador] = useState(1);

  const obtenerFechaActual = () => {
    const fecha = new Date();
    const opcionesFecha = { day: 'numeric', month: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opcionesFecha);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setNota({
      ...nota,
      [name]: value,
    });

    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nota.nombreNota.trim() != '' && nota.descripcionNota.trim() != '') {
      const newNota = {
        id: contador,
        nombre: nota.nombreNota,
        descripcion: nota.descripcionNota,
      };
      setListaNota([...listaNota, newNota]);
      setNota({ nombreNota: '', descripcionNota: '' });
      setContador(contador + 1);
    } else {
      alert('Completar campos');
    }
  };

  const handleKeyDownTitulo = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      document.querySelector('.descripcionAddNota').focus();
    }
  };

  const handleKeyDownDescripcion = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit} className="formAddNotas">
        <input
          type="text"
          className="nombreAddNota"
          name="nombreNota"
          value={nota.nombreNota}
          onChange={handleInput}
          placeholder="Titulo"
          onKeyDown={handleKeyDownTitulo}
        ></input>
        <textarea
          className="descripcionAddNota"
          name="descripcionNota"
          value={nota.descripcionNota}
          onChange={handleInput}
          onKeyDown={handleKeyDownDescripcion}
          placeholder="Añade una nota..."
          rows="1"
        ></textarea>
        <button type="submit" className="btnGuardar">
          Guardar
        </button>
      </form>
      <Nota listaNota={listaNota} setListaNota={setListaNota} fechaActual = {obtenerFechaActual}/>
    </main>
  );
}
