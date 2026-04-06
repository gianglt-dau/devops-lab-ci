import './App.css';
import calc from './calculator';

function App() {
  const a = 2;
  const b = 3;
  const wrong = calc.addWrong(a, b);

  return (
    <div style={{ padding: 32 }}>
      <h1>React Calculator App</h1>
      <p>Gọi hàm `addWrong({a}, {b})` trả về: <strong>{wrong}</strong></p>
    </div>
  );
}

export default App
