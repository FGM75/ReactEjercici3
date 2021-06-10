import { Circulo } from "./componentes/circulos";

function App() {
  const circulos = [1, 2, 3, 4, 5];

  return (
    <ul className="lista">
      {circulos.map((circulo) => (
        <Circulo key={circulo}></Circulo>
      ))}
    </ul>
  );
}

export default App;
