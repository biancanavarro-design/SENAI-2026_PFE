"use client";
import { useState } from "react";
import Header from "../components/header";
import styles from './calculadora.module.css';

export default function Calculadora() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    function Somar(e) {
        if (e && e.preventDefault) e.preventDefault();
        setError('');
        setResult(Number(n1 || 0) + Number(n2 || 0));
    }

    function Subtrair(e) {
        if (e && e.preventDefault) e.preventDefault();
        setError('');
        setResult(Number(n1 || 0) - Number(n2 || 0));
    }

    function Multiplicar(e) {
        if (e && e.preventDefault) e.preventDefault();
        setError('');
        setResult(Number(n1 || 0) * Number(n2 || 0));
    }

    function Dividir(e) {
        if (e && e.preventDefault) e.preventDefault();
        setError('');
        const denominator = Number(n2 || 0);
        if (denominator === 0) {
            setResult(null);
            setError('Erro: divisão por zero não permitida');
            return;
        }
        setResult(Number(n1 || 0) / denominator);
    }

    function Raiz(e) {
        if (e && e.preventDefault) e.preventDefault();
        setError('');
        const source = n1 !== '' ? Number(n1) : (result !== null ? Number(result) : null);
        if (source === null || Number.isNaN(source)) {
            setError('Informe um número válido para calcular a raiz');
            return;
        }
        if (source < 0) {
            setResult(null);
            setError('Erro: raiz quadrada de número negativo');
            return;
        }
        setResult(Math.sqrt(source));
    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.display}>{result ?? 0}</div>

                <label className={styles.label}>Número 1</label>
                <input className={styles.input} type="number" value={n1} onChange={(e) => setN1(e.target.value)} />

                <label className={styles.label}>Número 2</label>
                <input className={styles.input} type="number" value={n2} onChange={(e) => setN2(e.target.value)} />

                <div className={styles.row}>
                    <button className={styles.btn} onClick={Somar}>+</button>
                    <button className={styles.btn} onClick={Subtrair}>−</button>
                    <button className={styles.btn} onClick={Multiplicar}>×</button>
                    <button className={styles.btn} onClick={Dividir}>÷</button>
                    <button className={`${styles.btn} ${styles.secondary}`} onClick={Raiz}>√</button>
                    <button className={`${styles.btn} ${styles.secondary}`} onClick={(e) => { e.preventDefault(); setN1(''); setN2(''); setResult(null); setError(''); }}>Limpar</button>
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.result}>Resultado: {result ?? 0}</div>
            </main>
        </>
    );
}