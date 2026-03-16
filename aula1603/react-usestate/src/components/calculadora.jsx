import { useState } from "react";

export default function Calculadora({ titulo }) {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  function validar() {
    if (num1 <= 0 || num2 <= 0) {
      alert("Não são permitidos números zero ou negativos");
      return false;
    }
    return true;
  }

  function somar() {
    if (!validar()) return;
    setResultado(Number(num1) + Number(num2));
  }

  function subtrair() {
    if (!validar()) return;
    setResultado(Number(num1) - Number(num2));
  }

  function multiplicar() {
    if (!validar()) return;
    setResultado(Number(num1) * Number(num2));
  }

  function dividir() {
    if (!validar()) return;
    setResultado(Number(num1) / Number(num2));
  }

  function potencia() {
    if (!validar()) return;
    setResultado(Number(num1) ** Number(num2));
  }

  function raiz() {
    if (num1 <= 0) {
      alert("Digite um número positivo");
      return;
    }
    setResultado(Math.sqrt(Number(num1)));
  }

  function limpar() {
    setNum1("");
    setNum2("");
    setResultado("");
  }

  return (
    <div className="container">

      <h1>{titulo}</h1>

      <div className="calculadora">

        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="botoes">

          <button onClick={somar}>+</button>
          <button onClick={subtrair}>−</button>
          <button onClick={multiplicar}>×</button>
          <button onClick={dividir}>÷</button>

          <button onClick={potencia}>xʸ</button>
          <button onClick={raiz}>√</button>

          <button className="limpar" onClick={limpar}>
            Limpar
          </button>

        </div>

        <h2>Resultado: {resultado}</h2>

      </div>

    </div>
  );
}