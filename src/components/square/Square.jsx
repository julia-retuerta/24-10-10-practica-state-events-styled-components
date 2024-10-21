// - Crea un componente Square, dentro tendrás un div de 200px x 200px de color rojo (o el que más te guste). Añade un botón al componente y haz que al pulsarlo cambie de color, de rojo a verde por ejemplo, si vuelves a pulsar volverá al color rojo y así con cada pulsación del botón. Pista: Necesitas un estado que cambie entre true y false

import { useState } from 'react';
import { StyledSquare } from './square.styles';

const Square = () => {
  const [color, setColor] = useState(true);

  return (
    <>
      <StyledSquare $color={color} />

      <button onClick={() => changeColor(color, setColor)}>Change color</button>
    </>
  );
};

const changeColor = (color, setColor) => {
  setColor(!color);
  // Invierte el valor del estado actual. Si color es true, lo cambia a false, y viceversa.
};

export default Square;
