import React, { useState} from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');
  const [idade, setIdade] = useState('');
  const [erroIdade, setErroIdade] = useState('');

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const idadeCalculada = anoAtual - parseInt(anoNascimento, 10);
    

    if (idadeCalculada < 0 || idadeCalculada > 120) {
      setErroIdade('Erro no ano de nascimento');
    } else {
      setErroIdade('');
      setIdade(idadeCalculada);
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de Idade</h1>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Ano de Nascimento:
        <input
          type="number"
          value={anoNascimento}
          onChange={(e) => setAnoNascimento(e.target.value)}
        />
      </label>
      <button onClick={calcularIdade}>Calcular idade</button>
      {idade !== '' && erroIdade === '' && (
        <p> {nome}, você tem {idade} anos!</p>
      )}
      {erroIdade !== '' && (
        <p>{erroIdade}</p>
      )}
    </div>
  );
}


export default App;