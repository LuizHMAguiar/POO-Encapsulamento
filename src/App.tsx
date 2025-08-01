import './App.css'
import { ContaBancaria } from './models/ContaBancaria';
import { formatarMoeda } from './utils/formatador';
import { useState } from 'react';

function App() {
  const [conta] = useState(new ContaBancaria());
  const [valor, setValor] = useState(0);
  const [saldo, setSaldo] = useState(conta.verSaldo());
  const [mensagem, setMensagem] = useState('');

  const handleDepositar = () => {
    try {
      conta.depositar(valor);
      setSaldo(conta.verSaldo());
      setMensagem('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMensagem(error.message);
      }
    }
  };

  const handleSacar = () => {
    try {
      conta.sacar(valor);
      setSaldo(conta.verSaldo());
      setMensagem('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMensagem(error.message);
      }
    }
  };

  return (
    <div>
      <h2>Saldo disponível: {formatarMoeda(saldo)}</h2>
      <input
        type="number"
        value={valor}
        onChange={e => setValor(Number(e.target.value))}
        placeholder="Digite o valor"
      />
      <button onClick={handleDepositar}>Depositar</button>
      <button onClick={handleSacar}>Sacar</button>  
      {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}
    </div>
  );
}

export default App;