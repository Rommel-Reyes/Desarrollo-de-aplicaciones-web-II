
import './App.css';

type Unidad = 'Celsius' | 'Fahrenheit' | 'Kelvin';

// Valor y unidad fijos
const valor = 25;
const unidad: Unidad = 'Celsius';

function convertirTemperatura(valor: number, unidad: Unidad) {
  let celsius: number, fahrenheit: number, kelvin: number;
  if (unidad === 'Celsius') {
    celsius = valor;
    fahrenheit = (valor * 9) / 5 + 32;
    kelvin = valor + 273.15;
  } else if (unidad === 'Fahrenheit') {
    celsius = (valor - 32) * 5 / 9;
    fahrenheit = valor;
    kelvin = (valor - 32) * 5 / 9 + 273.15;
  } else {
    celsius = valor - 273.15;
    fahrenheit = (valor - 273.15) * 9 / 5 + 32;
    kelvin = valor;
  }
  return [
    { label: 'Celsius', value: celsius.toFixed(2) },
    { label: 'Fahrenheit', value: fahrenheit.toFixed(2) },
    { label: 'Kelvin', value: kelvin.toFixed(2) },
  ];
}

function App() {
  const resultados = convertirTemperatura(valor, unidad);
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Conversor de Temperatura</h2>
      <p>
        Valor original: <strong>{valor} {unidad}</strong>
      </p>
      <ul>
        {resultados.map((r) => (
          <li key={r.label}>
            {r.label}: {r.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
