import React from 'react';
import BtnColors from '../components/BtnColors.jsx';
import { useState } from 'react';
import './estilos/PaginaColor.css';

export default function PaginaColor() {
  const colores = [
    'white',
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
    'brown',
    'orange',
  ];

  const [fondo, setFondo] = useState('white');
  const [addColor, setAddColor] = useState('');
  const [listColors, setListColors] = useState(colores);

  const cambiarFondo = (color) => {
    setFondo(color);
  };

  const handleInputColor = (e) => {
    e.preventDefault();
    setAddColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addColor.trim() != '') {
      if(!listColors.includes(addColor)){
        setListColors([...listColors, addColor]);
        setAddColor('');
      }else{
        console.log("este color ya existe")
      }
    } else {
      console.log('no existe color');
    }
  };

  return (
    <main className="container" style={{ backgroundColor: fondo }}>
      <form
        action=""
        className="formAddColors"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={addColor}
          className="inputAddColors"
          placeholder="Añada un color..."
          onChange={(ev) => {
            handleInputColor(ev);
          }}
        ></input>
        <button className="btnAddColors">Agregar</button>
      </form>
      <section className="containerColor">
        {listColors.map((color, index) => {
          return (
            <BtnColors
              colors={color}
              onColorChange={cambiarFondo}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
}
