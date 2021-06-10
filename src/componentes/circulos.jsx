import { useState } from "react";

export const Circulo = () => {
  const [seleccionado, selectCirculo] = useState(false);
  const cambiarCirculo = () => {
    if (seleccionado) {
      selectCirculo(false);
    } else {
      selectCirculo(true);
    }
  };
  return (
    <li
      className="circulo"
      style={{ backgroundColor: seleccionado ? "orange" : "grey" }}
      onClick={cambiarCirculo}
    ></li>
  );
};
