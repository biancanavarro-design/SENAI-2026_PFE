import { useState } from 'react';
import Header from '../../components/header';

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');

    return(
        <section className="container">
            <Header />
            <h2>Cadastro de  dados pessoais</h2>

            <form action="">
          <label htmlFor="nome">Nome</label>
          <input type="text" id='nome' placeholder='Nome completo' value={nome} onChange={(e) => setNome (e.target.value)} />

          <label htmlFor="endereco">Endereço</label>
          <input type="text" id='endereco' placeholder='Endereco' value={endereco} onChange={(e) => setEndereco (e.target.value)} />

          <label htmlFor="celular">Celular</label>
          <input type="text" id='celular' placeholder='Celular' value={celular} onChange={(e) => setCelular (e.target.value)} />

          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Email' value={email} onChange={(e) => setEmail (e.target.value)} />
          
          <label htmlFor="documento">Documento</label>
          <input type="text" id='documento' placeholder='documento' value={documento} onChange={(e) => setDocumento (e.target.value)} />
          
          

        <button>
            Salvar
        </button>

            </form>
        </section>
    )
}