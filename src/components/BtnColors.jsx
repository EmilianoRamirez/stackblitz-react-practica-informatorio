import React from 'react';
import './BtnColor.css';

function BtnColor({ colors, onColorChange}) {
  return (
    <button className="colors" style={{ backgroundColor: colors }} onClick = { ()=> onColorChange(colors)}>
      {colors}
    </button>
  );
}

export default BtnColor;
