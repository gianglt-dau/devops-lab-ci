import Calculator from './Calculator.jsx';
import './App.css';
import calc from './calculator';

function App() {
  return ( 
    <div style={{ padding: 32 }}>
      <h1>React Calculator App</h1>
      <p>Gọi hàm `addWrong({a}, {b})` trả về: <strong>{wrong}</strong></p>
    </div>
  );
}

export default App
