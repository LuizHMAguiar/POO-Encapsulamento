import './App.css'
import { ContaBancaria } from './models/ContaBancaria';

function App() {
  const conta = new ContaBancaria();
  conta.depositar(100);
  conta.sacar(40);

  return <p>Saldo disponível: {conta.verSaldo()}</p>;
}

export default App;